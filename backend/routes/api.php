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

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Rutas de autenticación
Route::post('login', [AuthController::class, 'login']);

// Rutas protegidas
Route::middleware('auth:sanctum')->group(function () {

    // Route::get('users', [UserController::class, 'index']);
    // Route::post('register', [AuthController::class, 'register'])->middleware('role:Administrador');
    // Route::get('roles', [RoleController::class, 'index'])->middleware('role:Administrador');

    // Route::put('user/{id}', [UserController::class, 'update'])->middleware('role:Administrador');

    // Route::delete('/user/{id}', [UserController::class, 'destroy'])->middleware('role:Administrador');

    // Route::put('user/{id}/change-password', [UserController::class, 'changePassword'])->middleware('role:Administrador');

    Route::get('users', [UserController::class, 'index']);
    Route::post('register', [AuthController::class, 'register']);
    Route::get('roles', [RoleController::class, 'index']);

    Route::put('user/{id}', [UserController::class, 'update']);
    Route::delete('/user/{id}', [UserController::class, 'destroy']);

    Route::put('user/{id}/change-password', [UserController::class, 'changePassword']);

    Route::get('user', [AuthController::class, 'user']);
    Route::post('logout', [AuthController::class, 'logout']);

    Route::prefix('customers')->group(function () {
        Route::get('/', [CustomerController::class, 'index']); // Obtener todos los clientes
        Route::post('/', [CustomerController::class, 'store']); // Crear un nuevo cliente
        Route::put('/{id}', [CustomerController::class, 'update']); // Actualizar un cliente
        Route::delete('/{id}', [CustomerController::class, 'destroy']); // Eliminar un cliente
        Route::get('/active', [CustomerController::class, 'getActive']); // Obtener un cliente por su id
    });
    Route::prefix('services')->group(function () {
        Route::get('/', [ServiceController::class, 'index']);
        Route::post('/', [ServiceController::class, 'store']);
        Route::put('/{id}', [ServiceController::class, 'update']);
        Route::delete('/{id}', [ServiceController::class, 'destroy']);
        Route::get('/by-type/{id}', [ServiceController::class, 'getServicesByType']);
    });
    Route::prefix('services-type')->group(function () {
        Route::get('/', [ServiceTypeController::class, 'index']);
    });

    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index']);
        Route::post('/', [ProductController::class, 'store']);
        Route::put('/{id}', [ProductController::class, 'update']);
        Route::delete('/{id}', [ProductController::class, 'destroy']);
        Route::get('/active', [ProductController::class, 'getActive']);
    });
    Route::prefix('businesses')->group(function () {
        Route::get('/', [BusinessController::class, 'index']);
        Route::post('/', [BusinessController::class, 'store']);
        Route::put('/{id}', [BusinessController::class, 'update']);
        Route::delete('/{id}', [BusinessController::class, 'destroy']);
    });

    Route::prefix('routes')->group(function () {
        Route::get('/', [RouteController::class, 'index']);
    });

    Route::prefix('rates')->group(function () {
        Route::get('/', [RateController::class, 'index']);
        Route::post('/', [RateController::class, 'store']);
        Route::put('/{id}', [RateController::class, 'update']);
        Route::delete('/{id}', [RateController::class, 'destroy']);
        Route::get('/getByCode/{code}', [RateController::class, 'getByCode']);
        Route::post('/getByAttributes', [RateController::class, 'getByAttributes']);
        Route::put('/updateStatus/{id}', [RateController::class, 'updateStatus']);
    });

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

    Route::prefix('schedule')->group(function () {
        Route::get('/', [ScheduleController::class, 'index']);
    });

    Route::prefix('planning')->group(function () {
        Route::get('/', [PlanningController::class, 'index']);
    });
});
