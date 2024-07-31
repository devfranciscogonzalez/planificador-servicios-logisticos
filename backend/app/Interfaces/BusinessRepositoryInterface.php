<?php

namespace App\Interfaces;

use App\Models\Business;

interface BusinessRepositoryInterface
{
  public function create(array $data);
  public function getById($id);
  public function update($id, array $data);
  public function delete($id);
  public function getAll();
}
