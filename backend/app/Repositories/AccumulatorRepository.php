<?php

namespace App\Repositories;

use App\Interfaces\AccumulatorRepositoryInterface;
use App\Models\Accumulator;
use Illuminate\Database\Eloquent\Collection;

class AccumulatorRepository implements AccumulatorRepositoryInterface
{
  public function getAll(): Collection
  {
    return Accumulator::all();
  }
}
