<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PlanningController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServiceOrderController;
use App\Http\Controllers\ServiceTypeController;

// RUTAS PUBLICAS
Route::post('login', [AuthController::class, 'login']);

// RUTAS PROTEGIDAS
Route::middleware('auth:sanctum')->group(function () {

    // AUTH ROUTES
    Route::post('register', [AuthController::class, 'register'])->middleware('role:Administrador,Jefe Comercial');
    Route::get('user', [AuthController::class, 'user'])->middleware('role:Administrador,Jefe Comercial,Supervisor,Customer Service,Portero,Romana');
    Route::post('logout', [AuthController::class, 'logout'])->middleware('role:Administrador,Jefe Comercial,Supervisor,Customer Service,Portero,Romana');


    // USUARIOS
    Route::prefix('users')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::put('/{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
        Route::put('/{id}/change-password', [UserController::class, 'changePassword']);
    });

    // ROLES
    Route::get('roles', [RoleController::class, 'index'])->middleware('role:Administrador,Jefe Comercial');

    // ATENCION AL CLIENTE 
    Route::prefix('customers')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [CustomerController::class, 'index']);
        Route::post('/', [CustomerController::class, 'store']);
        Route::put('/{id}', [CustomerController::class, 'update']);
        Route::delete('/{id}', [CustomerController::class, 'destroy']);
        Route::get('/active', [CustomerController::class, 'getActive']);
    });

    // SERVICIOS
    Route::prefix('services')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [ServiceController::class, 'index'])->middleware('role:Administrador,Jefe Comercial');
        Route::post('/', [ServiceController::class, 'store'])->middleware('role:Administrador,Jefe Comercial');
        Route::put('/{id}', [ServiceController::class, 'update'])->middleware('role:Administrador,Jefe Comercial');
        Route::delete('/{id}', [ServiceController::class, 'destroy'])->middleware('role:Administrador,Jefe Comercial');
        Route::get('/by-type/{id}', [ServiceController::class, 'getServicesByType'])->middleware('role:Administrador,Jefe Comercial');
    });

    // TIPO DE SERVICIOS
    Route::prefix('services-type')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [ServiceTypeController::class, 'index'])->middleware('role:Administrador,Jefe Comercial');
    });

    // PRODUCTOS
    Route::prefix('products')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/', [ProductController::class, 'store']);
        Route::put('/{id}', [ProductController::class, 'update']);
        Route::delete('/{id}', [ProductController::class, 'destroy']);
        Route::get('/active', [ProductController::class, 'getActive']);
    });

    // NEGOCIOS
    Route::prefix('businesses')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [BusinessController::class, 'index']);
        Route::post('/', [BusinessController::class, 'store']);
        Route::put('/{id}', [BusinessController::class, 'update']);
        Route::delete('/{id}', [BusinessController::class, 'destroy']);
    });

    // RUTAS
    Route::prefix('routes')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [RouteController::class, 'index']);
    });

    // TARIFAS
    Route::prefix('rates')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [RateController::class, 'index']);
        Route::post('/', [RateController::class, 'store']);
        Route::put('/{id}', [RateController::class, 'update']);
        Route::delete('/{id}', [RateController::class, 'destroy']);
        Route::get('/getByCode/{code}', [RateController::class, 'getByCode']);
        Route::post('/getByAttributes', [RateController::class, 'getByAttributes']);
        Route::put('/updateStatus/{id}', [RateController::class, 'updateStatus']);
    });

    // ORDENES DE SERVICIO
    Route::prefix('orders')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [ServiceOrderController::class, 'index']);
        Route::post('/', [ServiceOrderController::class, 'store']);
        Route::put('/{id}', [ServiceOrderController::class, 'update']);
        Route::delete('/{id}', [ServiceOrderController::class, 'destroy']);
        Route::put('/updateDate/{id}', [ServiceOrderController::class, 'updateDate']);
        Route::put('/updateEntryDate/{id}', [ServiceOrderController::class, 'updateEntryDate']);
        Route::put('/updateExitDate/{id}', [ServiceOrderController::class, 'updateExitDate']);
        Route::put('/addTruckPlate/{id}', [ServiceOrderController::class, 'addTruckPlate']);
        Route::put('/addWeightEntry/{id}', [ServiceOrderController::class, 'addWeightEntry']);
        Route::put('/addWeightExit/{id}', [ServiceOrderController::class, 'addWeightExit']);
        Route::put('/updateStatus/{id}', [ServiceOrderController::class, 'updateStatus']);
        Route::put('/updateStatusEnd/{id}', [ServiceOrderController::class, 'updateStatusEnd']);
    });

    // PLANIFICACION OS
    Route::prefix('schedule')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [ScheduleController::class, 'index']);
    });

    // PLANIFICACION
    Route::prefix('planning')->middleware('role:Administrador,Jefe Comercial')->group(function () {
        Route::get('/', [PlanningController::class, 'index']);
    });
});
