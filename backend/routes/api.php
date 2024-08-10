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

// Rutas de autenticación
Route::post('login', [AuthController::class, 'login']);

// RUTAS PROTEGIDAS
Route::middleware('auth:sanctum')->group(function () {

    // USUARIO
    Route::get('users', [UserController::class, 'index']);
    Route::put('user/{id}', [UserController::class, 'update'])->middleware('role:Administrador');
    Route::delete('/user/{id}', [UserController::class, 'destroy'])->middleware('role:Administrador');
    Route::put('user/{id}/change-password', [UserController::class, 'changePassword'])->middleware('role:Administrador');

    Route::post('register', [AuthController::class, 'register'])->middleware('role:Administrador');
    Route::get('roles', [RoleController::class, 'index'])->middleware('role:Administrador.Jefe Comercial');


    // INICIAR O CERRAR SESION
    Route::get('user', [AuthController::class, 'user']);
    Route::post('logout', [AuthController::class, 'logout']);

    // ATENCION AL CLIENTE 
    Route::prefix('customers')->group(function () {
        Route::get('/', [CustomerController::class, 'index']);
        Route::post('/', [CustomerController::class, 'store']);
        Route::put('/{id}', [CustomerController::class, 'update']);
        Route::delete('/{id}', [CustomerController::class, 'destroy']);
        Route::get('/active', [CustomerController::class, 'getActive']);
    });

    // SERVICIOS
    Route::prefix('services')->group(function () {
        Route::get('/', [ServiceController::class, 'index']);
        Route::post('/', [ServiceController::class, 'store']);
        Route::put('/{id}', [ServiceController::class, 'update']);
        Route::delete('/{id}', [ServiceController::class, 'destroy']);
        Route::get('/by-type/{id}', [ServiceController::class, 'getServicesByType']);
    });

    // TIPO DE SERVICIOS
    Route::prefix('services-type')->group(function () {
        Route::get('/', [ServiceTypeController::class, 'index']);
    });

    // PRODUCTOS
    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/', [ProductController::class, 'store']);
        Route::put('/{id}', [ProductController::class, 'update']);
        Route::delete('/{id}', [ProductController::class, 'destroy']);
        Route::get('/active', [ProductController::class, 'getActive']);
    });

    // NEGOCIOS
    Route::prefix('businesses')->group(function () {
        Route::get('/', [BusinessController::class, 'index']);
        Route::post('/', [BusinessController::class, 'store']);
        Route::put('/{id}', [BusinessController::class, 'update']);
        Route::delete('/{id}', [BusinessController::class, 'destroy']);
    });

    // RUTAS
    Route::prefix('routes')->group(function () {
        Route::get('/', [RouteController::class, 'index']);
    });

    // TARIFAS
    Route::prefix('rates')->group(function () {
        Route::get('/', [RateController::class, 'index']);
        Route::post('/', [RateController::class, 'store']);
        Route::put('/{id}', [RateController::class, 'update']);
        Route::delete('/{id}', [RateController::class, 'destroy']);
        Route::get('/getByCode/{code}', [RateController::class, 'getByCode']);
        Route::post('/getByAttributes', [RateController::class, 'getByAttributes']);
        Route::put('/updateStatus/{id}', [RateController::class, 'updateStatus']);
    });

    // ordenes de servicio (OS)
    Route::prefix('orders')->group(function () {
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
    Route::prefix('schedule')->group(function () {
        Route::get('/', [ScheduleController::class, 'index']);
    });

    // PLANIFICACION
    Route::prefix('planning')->group(function () {
        Route::get('/', [PlanningController::class, 'index']);
    });
});
