<?php

namespace App\Http\Controllers;

use App\Interfaces\UserRepositoryInterface;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Exception;

class AuthController extends Controller
{
    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    // Registro de usuario
    public function register(RegisterRequest $request)
    {
        $user = $this->userRepository->create($request->validated());

        return response()->json(['message' => 'Usuario registrado con éxito'], 201);
    }

    // Inicio de sesión y generación de token
    // public function login(LoginRequest $request)
    // {
    //     if (!Auth::attempt($request->validated())) {
    //         return response()->json(['message' => 'Las credenciales proporcionadas no son correctas. Por favor, inténtelo de nuevo.'], 401);
    //     }

    //     $user = $this->userRepository->findByEmail($request->validated()['email']);
    //     $token = $user->createToken('auth_token')->plainTextToken;

    //     return response()->json([
    //         'access_token' => $token,
    //         'token_type' => 'Bearer',
    //     ]);
    // }

    public function login(LoginRequest $request)
    {
        // Intento de autenticación.
        if (!Auth::attempt($request->validated())) {
            return response()->json(['message' => 'Las credenciales proporcionadas no son correctas. Por favor, inténtelo de nuevo.'], 401);
        }

        // Obtener el usuario autenticado.
        $user = $this->userRepository->findByEmail($request->validated()['email']);

        // Verificar si el usuario está habilitado (status = 1).
        if ($user->status != 1) {
            return response()->json(['message' => 'Cuenta no habilitada. Por favor, contacte al administrador.'], 403);
        }

        // Generación del token.
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }


    // Cierre de sesión y revocación de token
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Cerró la sesión exitosamente y el token se eliminó exitosamente']);
    }


    // Obtener información del usuario autenticado
    public function user(Request $request)
    {
        try {
            $user = $this->userRepository->getAuthenticatedUser($request);
            return response()->json($user);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Usuario no registrado', 'message' => $e->getMessage()], 500);
        }
    }
}
