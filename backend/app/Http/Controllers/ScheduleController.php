<?php

namespace App\Http\Controllers;

use App\Interfaces\ScheduleRepositoryInterface;
use Exception;

class ScheduleController extends Controller
{
    protected $scheduleRepository;

    public function __construct(ScheduleRepositoryInterface $scheduleRepository)
    {
        $this->scheduleRepository = $scheduleRepository;
    }

    public function index()
    {
        try {
            $schedules = $this->scheduleRepository->getAll();
            return response()->json($schedules);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar los Horarios', 'message' => $e->getMessage()], 500);
        }
    }
}
