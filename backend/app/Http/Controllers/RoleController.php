<?php

namespace App\Http\Controllers;

use App\Interfaces\RoleRepositoryInterface;
use Exception;

class RoleController extends Controller
{
    protected $roleRepository;

    public function __construct(RoleRepositoryInterface $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    public function index()
    {
        try {
            $roles = $this->roleRepository->getAll();
            return response()->json($roles);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar los Roles', 'message' => $e->getMessage()], 500);
        }
    }
}
