<?php

namespace App\Http\Controllers;

use App\Interfaces\ServiceOrderRepositoryInterface;
use App\Http\Requests\ServiceOrderRequest;
use Exception;
use Illuminate\Http\Request;

class ServiceOrderController extends Controller
{
    protected $serviceOrderRepository;

    public function __construct(ServiceOrderRepositoryInterface $serviceOrderRepository)
    {
        $this->serviceOrderRepository = $serviceOrderRepository;
    }

    public function index()
    {
        try {
            $serviceOrders = $this->serviceOrderRepository->getAll();
            return response()->json($serviceOrders);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener las ordenes de servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(ServiceOrderRequest $request)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->create($request->validated());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Orden de servicio creada con éxito'], 201);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al crear la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function update(ServiceOrderRequest $request, $id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->update($id, $request->validated());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Orden de servicio actualizada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $this->serviceOrderRepository->delete($id);
            return response()->json(['message' => 'Orden de servicio eliminada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al eliminar la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }
    public function updateEntryDate($id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->updateEntryDate($id);
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Fecha de entrada de la orden de servicio actualizada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar la fecha de entrada de la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function updateExitDate($id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->updateExitDate($id);
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Fecha de salida de la orden de servicio actualizada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar la fecha de salida de la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function addTruckPlate(Request $request, $id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->addTruckPlate($id, $request->all());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Patente del camión agregada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al agregar la placa del camión', 'message' => $e->getMessage()], 500);
        }
    }

    public function addWeightEntry(Request $request, $id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->addWeightEntry($id, $request->all());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Peso de entrada agregado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al agregar el peso de entrada', 'message' => $e->getMessage()], 500);
        }
    }

    public function addWeightExit(Request $request, $id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->addWeightExit($id, $request->all());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Peso de salida agregado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al agregar el peso de salida', 'message' => $e->getMessage()], 500);
        }
    }

    public function updateDate(Request $request, $id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->updateDate($id, $request->all());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Fecha de la orden de servicio actualizada con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'La fecha proporcionada es la misma que la actual. No se requiere reprogramación.', 'message' => $e->getMessage()], 500);
        }
    }

    public function updateStatus(Request $request, $id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->updateStatus($id, $request->all());
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Estado de la orden de servicio actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el estado de la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }

    public function updateStatusEnd($id)
    {
        try {
            $serviceOrder = $this->serviceOrderRepository->updateStatusEnd($id);
            return response()->json(['serviceOrder' => $serviceOrder, 'message' => 'Estado de la orden de servicio actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el estado de la orden de servicio', 'message' => $e->getMessage()], 500);
        }
    }
}
