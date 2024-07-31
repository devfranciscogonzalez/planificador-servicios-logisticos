<?php

namespace App\Repositories;

use App\Interfaces\BusinessRepositoryInterface;
use App\Models\Business;

class BusinessRepository implements BusinessRepositoryInterface
{
  public function create(array $data)
  {
    return Business::create($data);
  }

  public function getById($id)
  {
    return Business::findOrFail($id);
  }

  public function update($id, array $data)
  {
    $business = Business::findOrFail($id);
    $business->update($data);
    return $business;
  }

  public function delete($id)
  {
    $business = Business::findOrFail($id);
    $business->delete();
    return $business;
  }

  public function getAll()
  {
    return Business::all();
  }
}
