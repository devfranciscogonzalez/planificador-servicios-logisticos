<?php

namespace App\Repositories;

use App\Interfaces\PlanningRepositoryInterface;
use App\Models\Planning;

class PlanningRepository implements PlanningRepositoryInterface
{
    public function getAll()
    {
        return Planning::all();
    }
}
