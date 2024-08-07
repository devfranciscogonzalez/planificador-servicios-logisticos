<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Interfaces\UserRepositoryInterface;


class UserRepository implements UserRepositoryInterface
{
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

    public function findByEmail(string $email)
    {
        return User::where('email', $email)->firstOrFail();
    }

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

    public function getAll()
    {
        return User::with('role:id,name')->get();
    }

    public function updateUser($id, array $data)
    {
        $user = User::findOrFail($id);
        $user->update($data);
        return $user;
    }

    public function updatePassword($id, $newPassword)
    {
        $user = User::findOrFail($id);
        $user->password = Hash::make($newPassword);
        $user->save();

        return $user;
    }

    public function delete($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return $user;
    }
}
