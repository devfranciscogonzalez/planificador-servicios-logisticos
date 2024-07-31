<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Interfaces\UserRepositoryInterface;

/**
 * Clase UserRepository que implementa UserRepositoryInterface.
 * Proporciona una capa de abstracción para interactuar con el modelo User.
 */
class UserRepository implements UserRepositoryInterface
{
    /**
     * Crea un nuevo usuario en la base de datos.
     *
     * @param array $data Datos del usuario a crear.
     * @return User El usuario recién creado.
     */
    public function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'status' => $data['status'],
            'role_id' => $data['role_id'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * Encuentra un usuario por su dirección de correo electrónico.
     *
     * @param string $email El correo electrónico del usuario a buscar.
     * @return User El usuario encontrado.
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException Si no se encuentra el usuario.
     */
    public function findByEmail(string $email)
    {
        return User::where('email', $email)->firstOrFail();
    }

    /**
     * Obtiene el usuario autenticado actualmente.
     *
     * @param mixed $request La solicitud actual.
     * @return array Datos del usuario autenticado.
     */
    public function getAuthenticatedUser($request)
    {
        $user = $request->user();
        $user->load('role');

        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'status' => $user->status,
            'role_id' => $user->role_id,
            'role' => $user->role->name ?? null,
        ];
    }

    /**
     * Obtiene todos los usuarios registrados en la base de datos.
     *
     * @return \Illuminate\Database\Eloquent\Collection|User[] Lista de todos los usuarios.
     */
    public function getAll()
    {
        return User::with('role:id,name')->get();
    }

    /**
     * Actualiza los datos de un usuario existente.
     *
     * @param int $id El ID del usuario a actualizar.
     * @param array $data Los nuevos datos del usuario.
     * @return User El usuario actualizado.
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException Si no se encuentra el usuario.
     */
    public function updateUser($id, array $data)
    {
        $user = User::findOrFail($id);
        $user->update($data);
        return $user;
    }

    /**
     * Actualiza la contraseña de un usuario.
     *
     * @param int $id El ID del usuario cuya contraseña se actualizará.
     * @param string $newPassword La nueva contraseña.
     * @return User El usuario con la contraseña actualizada.
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException Si no se encuentra el usuario.
     */
    public function updatePassword($id, $newPassword)
    {
        $user = User::findOrFail($id);
        $user->password = Hash::make($newPassword);
        $user->save();

        return $user;
    }

    /**
     * Elimina un usuario de la base de datos.
     *
     * @param int $id El ID del usuario a eliminar.
     * @return User El usuario eliminado.
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException Si no se encuentra el usuario.
     */
    public function delete($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $user;
    }
}
