<?php

namespace App\Interfaces;


interface RateRepositoryInterface
{
  public function getAll();
  public function getById($id);
  public function create(array $data);
  public function update($id, array $data);
  public function delete($id);
  public function getByCode($code);
  public function getByAttributes(array $data);
  public function updateStatus($id);
}
