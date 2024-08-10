<?php

namespace App\Http\Controllers;

use App\Interfaces\BusinessRepositoryInterface;
use App\Http\Requests\BusinessRequest;
use Exception;

class BusinessController extends Controller
{
    protected $businessRepository;

    public function __construct(BusinessRepositoryInterface $businessRepository)
    {
        $this->businessRepository = $businessRepository;
    }

    public function index()
    {
        try {
            $businesses = $this->businessRepository->getAll();
            return response()->json($businesses);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener los negocios', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(BusinessRequest $request)
    {
        try {
            $business = $this->businessRepository->create($request->validated());
            return response()->json(['business' => $business, 'message' => 'Negocio creado con éxito'], 201);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al crear el negocio', 'message' => $e->getMessage()], 500);
        }
    }


    public function update(BusinessRequest $request, $id)
    {
        try {
            $business = $this->businessRepository->update($id, $request->validated());
            return response()->json(['business' => $business, 'message' => 'Negocio actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el negocio', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $this->businessRepository->delete($id);
            return response()->json(['message' => 'Negocio eliminado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al eliminar el negocio', 'message' => $e->getMessage()], 500);
        }
    }
}
