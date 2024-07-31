<?php

namespace App\Http\Controllers;

use App\Interfaces\CustomerRepositoryInterface;
use App\Http\Requests\CustomerRequest;
use Exception;


class CustomerController extends Controller
{

    protected $customerRepository;


    public function __construct(CustomerRepositoryInterface $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }


    public function index()
    {
        try {
            $customers = $this->customerRepository->getAll();
            return response()->json($customers);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar los Clientes', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(CustomerRequest $request)
    {
        try {
            $customer = $this->customerRepository->create($request->validated());
            return response()->json(['message' => 'Cliente creado con éxito', 'customer' => $customer], 201);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al crear el Cliente', 'message' => $e->getMessage()], 500);
        }
    }

    // public function show($id)
    // {
    //     try {
    //         $customer = $this->customerRepository->getById($id);
    //         return response()->json($customer);
    //     } catch (Exception $e) {
    //         return response()->json(['errors' => 'Error al obtener el Cliente', 'message' => $e->getMessage()], 500);
    //     }
    // }

    public function update(CustomerRequest $request, $id)
    {
        try {
            $data = $request->validated();
            $customer = $this->customerRepository->update($id, $data);
            return response()->json(['customer' => $customer, 'message' => 'Cliente actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el Cliente', 'message' => $e->getMessage()], 500);
        }
    }


    public function destroy($id)
    {
        try {
            $this->customerRepository->delete($id);
            return response()->json(['message' => 'Cliente eliminado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al elminar el cliente', 'message' => $e->getMessage()], 500);
        }
    }

    public function getActive()
    {
        try {
            $customers = $this->customerRepository->getActive();
            return response()->json($customers);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar los Clientes activos', 'message' => $e->getMessage()], 500);
        }
    }
}
