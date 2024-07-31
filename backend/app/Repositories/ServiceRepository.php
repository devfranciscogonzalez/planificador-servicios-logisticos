<?php

namespace App\Repositories;

use App\Interfaces\ServiceRepositoryInterface;
use App\Models\Service;

class ServiceRepository implements ServiceRepositoryInterface
{
  /**
   * Crea un nuevo servicio.
   *
   * @param array $data
   * @return Service
   */
  public function create(array $data)
  {
    $service = Service::create($data);
    return $service;
  }

  /**
   * Obtiene un servicio por su id.
   *
   * @param int $id
   * @return Service
   */
  public function getById($id)
  {
    return Service::findOrFail($id);
  }

  /**
   * Actualiza un servicio.
   *
   * @param int $id
   * @param array $data
   * @return Service
   */
  public function update($id, array $data)
  {
    $service = Service::findOrFail($id);
    $service->update($data);
    return $service;
  }

  /**
   * Elimina un servicio.
   *
   * @param int $id
   * @return Service
   */
  public function delete($id)
  {
    $service = Service::findOrFail($id);
    $service->delete();
    return $service;
  }

  /**
   * Obtiene todos los servicios.
   *
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function getAll()
  {
    return Service::with('user', "serviceType")->get();
  }

  public function getByServiceTypeId($serviceTypeId)
  {
    return Service::where('service_type_id', $serviceTypeId)->get();
  }
}
