<?php

namespace App\Http\Controllers;

use App\Interfaces\RouteRepositoryInterface;
use Exception;

class RouteController extends Controller
{
    protected $routeRepository;

    public function __construct(RouteRepositoryInterface $routeRepository)
    {
        $this->routeRepository = $routeRepository;
    }

    public function index()
    {
        try {
            $routes = $this->routeRepository->getAll();
            return response()->json($routes);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar las Rutas', 'message' => $e->getMessage()], 500);
        }
    }
}
