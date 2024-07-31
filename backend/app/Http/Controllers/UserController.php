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
    /**
     * @var UserRepositoryInterface Repositorio para interactuar con los datos de usuario.
     */
    private $userRepository;

    /**
     * Constructor del controlador.
     *
     * @param UserRepositoryInterface $userRepository Inyección de dependencia del repositorio de usuarios.
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Obtiene y muestra todos los usuarios.
     *
     * @return \Illuminate\Http\JsonResponse Lista de usuarios en formato JSON.
     */
    public function index()
    {
        try {
            $users = $this->userRepository->getAll();
            return response()->json($users);
        } catch (Exception $e) {
            return response()->json(['errors' => 'Error al mostrar los Usuarios', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Actualiza la información de un usuario específico.
     *
     * @param UpdateUserRequest $request Datos de la solicitud validados.
     * @param int $id Identificador del usuario a actualizar.
     * @return \Illuminate\Http\JsonResponse Respuesta JSON con el usuario actualizado.
     */
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

    /**
     * Cambia la contraseña de un usuario.
     *
     * @param ChangePasswordRequest $request Datos de la solicitud validados, incluyendo la nueva contraseña.
     * @param int $id Identificador del usuario cuya contraseña se actualizará.
     * @return \Illuminate\Http\JsonResponse Respuesta JSON confirmando la actualización.
     */
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

    /**
     * Elimina un usuario específico.
     *
     * @param int $id Identificador del usuario a eliminar.
     * @return \Illuminate\Http\JsonResponse Respuesta JSON confirmando la eliminación.
     */
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
