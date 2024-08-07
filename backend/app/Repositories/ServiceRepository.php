<?php

namespace App\Repositories;

use App\Interfaces\ServiceRepositoryInterface;
use App\Models\Service;

class ServiceRepository implements ServiceRepositoryInterface
{

  public function create(array $data)
  {
    $service = Service::create($data);
    return $service;
  }

  public function getById($id)
  {
    return Service::findOrFail($id);
  }

  public function update($id, array $data)
  {
    $service = Service::findOrFail($id);
    $service->update($data);
    return $service;
  }

  public function delete($id)
  {
    $service = Service::findOrFail($id);
    $service->delete();
    return $service;
  }

  public function getAll()
  {
    return Service::with('user', "serviceType")->get();
  }

  public function getByServiceTypeId($serviceTypeId)
  {
    return Service::where('service_type_id', $serviceTypeId)->get();
  }
}
