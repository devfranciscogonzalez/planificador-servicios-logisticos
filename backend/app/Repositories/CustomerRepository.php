<?php

namespace App\Repositories;

use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;
use Illuminate\Http\UploadedFile;

class CustomerRepository implements CustomerRepositoryInterface
{

  public function create(array $data)
  {

    if (isset($data['logo']) && $data['logo'] instanceof UploadedFile) {
      $path = $data['logo']->store('logos/customers', 'public');
      $data['logo'] = $path;
    } else {
      $data['logo'] = 'logos/no-logo.png'; 
    }
    $customer = Customer::create([
      'name' => $data['name'],
      'description' => $data['description'],
      'status' => $data['status'],
      'logo' => $data['logo'] ?? null,
      'user_id' => $data['user_id'],
    ]);
    return $customer;
  }

  public function getById($id)
  {
    return Customer::findOrFail($id);
  }

  public function update($id, array $data)
  {
    $customer = Customer::findOrFail($id);
    if (isset($data['logo']) && $data['logo'] instanceof UploadedFile) {
      $path = $data['logo']->store('logos/customers', 'public');
      $data['logo'] = $path;
    } else {
      unset($data['logo']);
    }
    $customer->update($data);
    return $customer;
  }

  public function delete($id)
  {
    $customer = Customer::findOrFail($id);
    $customer->delete();
    return $customer;
  }

  public function getAll()
  {
    return Customer::with('user')->get();
  }

  public function getActive()
  {
    return Customer::where('status', 1)->get();
  }
}
