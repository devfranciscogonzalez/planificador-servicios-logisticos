<?php

namespace App\Repositories;

use App\Interfaces\ServiceTypeRepositoryInterface;
use App\Models\Service;
use App\Models\ServiceType;

class ServiceTypeRepository implements ServiceTypeRepositoryInterface
{    public function getAll()
    {
        return ServiceType::all();
    }
}
