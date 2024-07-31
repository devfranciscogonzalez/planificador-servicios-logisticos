<?php

namespace App\Http\Controllers;

use App\Interfaces\ProductRepositoryInterface;
use App\Http\Requests\ProductRequest;
use Exception;

class ProductController extends Controller
{
    protected $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function index()
    {
        try {
            $products = $this->productRepository->getAll();
            return response()->json($products);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener los productos', 'message' => $e->getMessage()], 500);
        }
    }

    public function store(ProductRequest $request)
    {
        try {
            $product = $this->productRepository->create($request->validated());
            return response()->json(['product' => $product, 'message' => 'Producto creado con éxito'], 201);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al crear el producto', 'message' => $e->getMessage()], 500);
        }
    }

    public function update(ProductRequest $request, $id)
    {
        try {
            $product = $this->productRepository->update($id, $request->validated());
            return response()->json(['product' => $product, 'message' => 'Producto actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el producto', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $this->productRepository->delete($id);
            return response()->json(['message' => 'Producto eliminado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al eliminar el producto', 'message' => $e->getMessage()], 500);
        }
    }

    public function getActive()
    {
        try {
            $products = $this->productRepository->getActive();
            return response()->json($products);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al obtener los productos activos', 'message' => $e->getMessage()], 500);
        }
    }
}
