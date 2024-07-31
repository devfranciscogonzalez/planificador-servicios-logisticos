<?php

namespace App\Repositories;

use App\Interfaces\ProductRepositoryInterface;
use App\Models\Product;
use Illuminate\Http\UploadedFile;

class ProductRepository implements ProductRepositoryInterface
{
  /**
   * Crea un nuevo producto.
   * @param array $data
   * @return Product
   */
  public function create(array $data)
  {
    if (isset($data['logo']) && $data['logo'] instanceof UploadedFile) {
      $path = $data['logo']->store('logos', 'public');
      $data['logo'] = $path;
    } else {
      $data['logo'] = 'logos/no-logo.png';
    }

    $product = Product::create($data);
    return $product;
  }

  /**
   * Obtiene un producto por su id.
   * @param int $id
   * @return Product
   */
  public function getById($id)
  {
    return Product::findOrFail($id);
  }

  /**
   * Actualiza un producto.
   * @param int $id
   * @param array $data
   * @return Product
   */
  public function update($id, array $data)
  {
    $product = Product::findOrFail($id);

    if (isset($data['logo']) && $data['logo'] instanceof UploadedFile) {
      $path = $data['logo']->store('logos', 'public');
      $data['logo'] = $path;
    } else {
      unset($data['logo']);
    }

    $product->update($data);
    return $product;
  }

  /**
   * Elimina un producto.
   * @param int $id
   * @return Product
   */
  public function delete($id)
  {
    $product = Product::findOrFail($id);
    $product->delete();
    return $product;
  }

  /**
   * Obtiene todos los productos.
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function getAll()
  {
    return Product::with('user', 'business')->get();
  }

  /**
   * Obtiene todos los productos activos.
   * @return \Illuminate\Database\Eloquent\Collection
   */
  public function getActive()
  {
    return Product::with('business')->where('status', 1)->get();
  }
}
