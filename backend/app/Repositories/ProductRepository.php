<?php

namespace App\Repositories;

use App\Interfaces\ProductRepositoryInterface;
use App\Models\Product;
use Illuminate\Http\UploadedFile;

class ProductRepository implements ProductRepositoryInterface
{

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

  public function getById($id)
  {
    return Product::findOrFail($id);
  }

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


  public function delete($id)
  {
    $product = Product::findOrFail($id);
    $product->delete();
    return $product;
  }


  public function getAll()
  {
    return Product::with('user', 'business')->get();
  }


  public function getActive()
  {
    return Product::with('business')->where('status', 1)->get();
  }
}
