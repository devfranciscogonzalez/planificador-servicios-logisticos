<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Interfaces\UserRepositoryInterface;
use Exception;

/**
 * Controlador para la gestión de usuarios.
 */
class UserController extends Controller
{

    private $userRepository;


    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index()
    {
        try {
            $users = $this->userRepository->getAll();
            return response()->json($users);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar los Usuarios', 'message' => $e->getMessage()], 500);
        }
    }

    public function update(UpdateUserRequest $request, $id)
    {
        try {
            // Ahora $request ya contiene los datos validados
            $data = $request->validated();
            $user = $this->userRepository->updateUser($id, $data);
            return response()->json(['user' => $user, 'message' => 'Usuario actualizado con éxito']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar el Usuario', 'message' => $e->getMessage()], 500);
        }
    }

    public function changePassword(ChangePasswordRequest $request, $id)
    {
        try {
            $newPassword = $request->input('new_password');
            $this->userRepository->updatePassword($id, $newPassword);
            return response()->json(['message' => 'Contraseña actualizada exitosamente']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al actualizar la contraseña', 'message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $this->userRepository->delete($id);
            return response()->json(['message' => 'Usuario eliminado exitosamente']);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al eliminar el usuario', 'message' => $e->getMessage()], 500);
        }
    }
}
