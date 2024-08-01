<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceTypeRequest;
use App\Interfaces\ServiceTypeRepositoryInterface;
use Exception;

class ServiceTypeController extends Controller
{
    protected $serviceTypeRepository;

    public function __construct(ServiceTypeRepositoryInterface $serviceTypeRepository)
    {
        $this->serviceTypeRepository = $serviceTypeRepository;
    }

    public function index()
    {
        try {
            $serviceTypes = $this->serviceTypeRepository->getAll();
            return response()->json($serviceTypes);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener los tipos de servicio', 'message' => $e->getMessage()], 500);
        }
    }
}
