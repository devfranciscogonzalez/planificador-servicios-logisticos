<?php

namespace App\Repositories;

use App\Interfaces\RoleRepositoryInterface;
use App\Models\Role;

// use Symfony\Component\HttpFoundation\Response;

class RoleRepository implements RoleRepositoryInterface
{
  public function getAll()
  {
    return Role::all();
  }
}
