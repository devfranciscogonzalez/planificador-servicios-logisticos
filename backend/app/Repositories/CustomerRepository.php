<?php

namespace App\Repositories;

use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;
use Illuminate\Http\UploadedFile;

class CustomerRepository implements CustomerRepositoryInterface
{

  /**
   * Crea un nuevo cliente.
   * @param array $data
   * @return Customer
   */
  public function create(array $data)
  {

    if (isset($data['logo']) && $data['logo'] instanceof UploadedFile) {
      $path = $data['logo']->store('logos', 'public');
      $data['logo'] = $path;
    } else {
      $data['logo'] = 'logos/no-logo.png'; // Asegúrate de que esta ruta sea correcta.
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

  /**
   * Obtiene un cliente por su id.
   * @param int $id
   * @return Customer
   */

  public function getById($id)
  {
    return Customer::findOrFail($id);
  }

  /**
   * Actualiza un cliente.
   *  @param int $id
   * @param array $data
   */
  public function update($id, array $data)
  {
    $customer = Customer::findOrFail($id);
    if (isset($data['logo']) && $data['logo'] instanceof UploadedFile) {
      $path = $data['logo']->store('logos', 'public');
      $data['logo'] = $path;
    } else {
      unset($data['logo']);
    }
    $customer->update($data);
    return $customer;
  }

  /**
   * Elimina un cliente.
   * @param int $id
   * @return Customer
   */
  public function delete($id)
  {
    $customer = Customer::findOrFail($id);
    $customer->delete();
    return $customer;
  }

  /**
   * Obtiene todos los clientes.
   * @param void
   * @return Collection
   */

  public function getAll()
  {
    return Customer::with('user')->get();
  }

  public function getActive()
  {
    return Customer::where('status', 1)->get();
  }
}
