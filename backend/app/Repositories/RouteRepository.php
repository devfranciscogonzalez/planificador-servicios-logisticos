<?php

namespace App\Repositories;

use App\Interfaces\RouteRepositoryInterface;
use App\Models\Route;

class RouteRepository implements RouteRepositoryInterface
{
  public function getAll()
  {
    return Route::all();
  }
}
