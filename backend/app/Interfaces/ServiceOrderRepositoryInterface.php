<?php

namespace App\Interfaces;

interface ServiceOrderRepositoryInterface
{
    public function getAll();
    public function getById($id);
    public function create(array $attributes);
    public function update($id, array $attributes);
    public function delete($id);
    public function updateEntryDate($id);
    public function updateExitDate($id);
    public function addTruckPlate($id, array $attributes);
    public function addWeightEntry($id, array $attributes);
    public function addWeightExit($id, array $attributes);
    public function updateDate($id, array $attributes);
    public function updateStatus($id, array $attributes);
    public function updateStatusEnd($id);
}
