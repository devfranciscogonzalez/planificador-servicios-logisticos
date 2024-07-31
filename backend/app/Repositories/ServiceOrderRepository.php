<?php

namespace App\Repositories;

use App\Interfaces\ServiceOrderRepositoryInterface;
use App\Models\ServiceOrder;
use Exception;
use Carbon\Carbon;

class ServiceOrderRepository implements ServiceOrderRepositoryInterface
{
  public function getAll()
  {
    return ServiceOrder::with([
      'customer:id,name',
      'service:id,name',
      'serviceType:id,name',
      'product:id,name',
      'business:id,name',
      'route:id,name',
      'planning:id,name',
      'schedule:id,name',
      'user:id,name,role_id',
    ])->get();
  }

  public function getById($id)
  {
    return ServiceOrder::findOrFail($id);
  }

  public function create(array $data)
  {
    return ServiceOrder::create($data);
  }

  public function update($id, array $data)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->update($data);
    return $serviceOrder;
  }

  public function delete($id)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->delete();
    return $serviceOrder;
  }

  public function updateEntryDate($id)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->entry = now();
    $serviceOrder->save();
    return $serviceOrder;
  }

  public function updateExitDate($id)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->exit = now();
    $serviceOrder->save();
    return $serviceOrder;
  }

  public function addTruckPlate($id, array $data)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->truck_plate = $data['truck_plate'];
    $serviceOrder->customer_service_name = $data['customer_service_name'];
    $serviceOrder->save();
    return $serviceOrder;
  }

  public function addWeightEntry($id, array $data)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->weight_entry = $data['weight_entry'];
    $serviceOrder->save();
    return $serviceOrder;
  }

  public function addWeightExit($id, array $data)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->weight_exit = $data['weight_exit'];
    $serviceOrder->save();
    return $serviceOrder;
  }


  public function updateDate($id, array $data)
  {
    // Encontrar la OS original
    $originalServiceOrder = ServiceOrder::findOrFail($id);

    // Convertir ambas fechas a objetos Carbon para comparación precisa
    $originalDate = Carbon::parse($originalServiceOrder->date);
    $newDate = Carbon::parse($data['date']);

    // Verificar si la nueva fecha es igual a la actual
    if ($originalDate->toDateString() === $newDate->toDateString()) {
      // Lanzar una excepción o manejar como prefieras
      throw new Exception("La fecha proporcionada es la misma que la actual. No se requiere reprogramación.");
    }

    // Clonar la OS original
    $newServiceOrder = $originalServiceOrder->replicate();
    $newServiceOrder->date = $data['date']; // Establecer la nueva fecha
    $newServiceOrder->save(); // Guardar la nueva OS

    // Actualizar la OS original
    $originalServiceOrder->rescheduled_os_id = $newServiceOrder->id; // Guardar el ID de la nueva OS
    $originalServiceOrder->save(); // Guardar cambios en la OS original

    return $originalServiceOrder;
  }




  public function updateStatus($id, array $data)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->status = $data['status'];
    $serviceOrder->comment = $data['comment'];
    $serviceOrder->container = $data['container'];
    $serviceOrder->supervisor_name = $data['supervisor_name'];
    $serviceOrder->date_status = now();
    $serviceOrder->save();
    return $serviceOrder;
  }

  public function updateStatusEnd($id)
  {
    $serviceOrder = ServiceOrder::findOrFail($id);
    $serviceOrder->status_end = 1;
    $serviceOrder->save();
    return $serviceOrder;
  }
}
