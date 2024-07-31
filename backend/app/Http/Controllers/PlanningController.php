<?php

namespace App\Http\Controllers;

use App\Interfaces\PlanningRepositoryInterface;
use Exception;

class PlanningController extends Controller
{
    protected $planningRepository;

    public function __construct(PlanningRepositoryInterface $planningRepository)
    {
        $this->planningRepository = $planningRepository;
    }

    public function index()
    {
        try {
            $plannings = $this->planningRepository->getAll();
            return response()->json($plannings);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar la Planificación', 'message' => $e->getMessage()], 500);
        }
    }
}
