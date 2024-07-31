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


    // public function store(ServiceTypeRequest $request)
    // {
    //     try {
    //         $serviceType = $this->serviceTypeRepository->create($request->validated());
    //         return response()->json(['serviceType' => $serviceType, 'message' => 'Tipo de servicio creado con éxito'], 201);
    //     } catch (Exception $e) {
    //         return response()->json(['errors' => 'Error al crear el tipo de servicio', 'message' => $e->getMessage()], 500);
    //     }
    // }



    // public function update(ServiceTypeRequest $request, $id)
    // {
    //     try {
    //         $serviceType = $this->serviceTypeRepository->update($id, $request->all());
    //         return response()->json(['serviceType' => $serviceType, 'message' => 'Tipo de servicio actualizado con éxito']);
    //     } catch (Exception $e) {
    //         return response()->json(['errors' => 'Error al actualizar el tipo de servicio', 'message' => $e->getMessage()], 500);
    //     }
    // }

    // public function destroy($id)
    // {
    //     try {
    //         $this->serviceTypeRepository->delete($id);
    //         return response()->json(['message' => 'Tipo de servicio eliminado con éxito']);
    //     } catch (Exception $e) {
    //         return response()->json(['errors' => 'Error al eliminar el tipo de servicio', 'message' => $e->getMessage()], 500);
    //     }
    // }
}
