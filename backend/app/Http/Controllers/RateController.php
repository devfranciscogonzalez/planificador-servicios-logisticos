<?php

namespace App\Http\Controllers;

use App\Interfaces\RateRepositoryInterface;
use App\Http\Requests\RateRequest;
use App\Http\Requests\RateVerifyRequest;
use Exception;

class RateController extends Controller
{
    protected $rateRepository;

    public function __construct(RateRepositoryInterface $rateRepository)
    {
        $this->rateRepository = $rateRepository;
    }

    public function index()
    {
        try {
            $rates = $this->rateRepository->getAll();
            return response()->json($rates);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener las tarifas', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(RateRequest $request)
    {
        try {
            $rate = $this->rateRepository->create($request->validated());
            return response()->json(['rate' => $rate, 'message' => 'Tarifa creada con éxito'], 201);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al crear la tarifa', 'message' => $e->getMessage()], 500);
        }
    }

    public function update(RateRequest $request, $id)
    {
        try {
            $rate = $this->rateRepository->update($id, $request->validated());
            return response()->json(['rate' => $rate, 'message' => 'Tarifa actualizada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar la tarifa', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $this->rateRepository->delete($id);
            return response()->json(['message' => 'Tarifa eliminada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al eliminar la tarifa', 'message' => $e->getMessage()], 500);
        }
    }

    public function getByCode($code)
    {
        try {
            $rate = $this->rateRepository->getByCode($code);
            return response()->json($rate);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener la tarifa a travez del codigo', 'message' => $e->getMessage()], 500);
        }
    }

    public function getByAttributes(RateVerifyRequest $request)
    {
        try {
            $rate = $this->rateRepository->getByAttributes($request->validated());
            return response()->json($rate);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener la tarifa a travez de los atributos', 'message' => $e->getMessage()], 500);
        }
    }

    public function updateStatus($id)
    {
        try {
            $rate = $this->rateRepository->updateStatus($id);
            return response()->json(['rate' => $rate, 'message' => 'Estado de la tarifa actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el estado de la tarifa', 'message' => $e->getMessage()], 500);
        }
    }
}
