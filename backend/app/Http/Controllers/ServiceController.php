<?php

namespace App\Http\Controllers;

use App\Interfaces\ServiceRepositoryInterface;
use App\Http\Requests\ServiceRequest;
use Exception;

class ServiceController extends Controller
{
    protected $serviceRepository;

    public function __construct(ServiceRepositoryInterface $serviceRepository)
    {
        $this->serviceRepository = $serviceRepository;
    }

    public function index()
    {
        try {
            $services = $this->serviceRepository->getAll();
            return response()->json($services);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener los servicios', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(ServiceRequest $request)
    {
        try {
            $service = $this->serviceRepository->create($request->validated());
            return response()->json(['service' => $service, 'message' => 'Servicio creado con éxito'], 201);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al crear el servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $service = $this->serviceRepository->getById($id);
            return response()->json($service);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener el servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function update(ServiceRequest $request, $id)
    {
        try {
            $service = $this->serviceRepository->update($id, $request->validated());
            return response()->json(['service' => $service, 'message' => 'Servicio actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $this->serviceRepository->delete($id);
            return response()->json(['message' => 'Servicio eliminado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al eliminar el servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function getServicesByType($id)
    {
        try {
            $services = $this->serviceRepository->getByServiceTypeId($id);
            return response()->json($services);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener los servicios', 'message' => $e->getMessage()], 500);
        }
    }
}
