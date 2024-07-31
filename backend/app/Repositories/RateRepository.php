<?php

namespace App\Repositories;

use App\Interfaces\RateRepositoryInterface;
use App\Models\Rate;

class RateRepository implements RateRepositoryInterface
{
  public function getAll()
  {
    return Rate::with([
      'customer:id,name',
      'service:id,name',
      'serviceType:id,name',
      'product:id,name',
      'business:id,name',
      'route:id,name',
      'user' => function ($query) {
        $query->select('id', 'name', 'role_id')
          ->with(['role:id,name']);
      }
    ])->get();
  }



  public function getById($id)
  {
    return Rate::findOrFail($id);
  }

  public function create(array $data)
  {
    return Rate::create($data);
  }

  public function update($id, array $data)
  {
    $rate = Rate::findOrFail($id);
    $rate->update($data);
    return $rate;
  }

  public function delete($id)
  {
    $rate = Rate::findOrFail($id);
    $rate->delete();
    return $rate;
  }

  public function getByCode($code)
  {
    return Rate::where('code', $code)->first();
  }

  public function getByAttributes(array $data)
  {
    return Rate::where('customer_id', $data['customer_id'])
      ->where('service_type_id', $data['service_type_id'])
      ->where('service_id', $data['service_id'])
      ->where('product_id', $data['product_id'])
      ->where('business_id', $data['business_id'])
      ->where('route_id', $data['route_id'])
      ->where('status', 1)
      ->get();
  }

  public function updateStatus($id, $status = 0) // $status tiene un valor predeterminado de 0
  {
    $rate = Rate::findOrFail($id);
    $rate->status = $status;
    $rate->save();
    return $rate;
  }
}
