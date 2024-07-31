<?php


namespace App\Interfaces;


interface UserRepositoryInterface
{
    public function create(array $data);
    public function findByEmail(string $email);
    public function getAll();
    public function getAuthenticatedUser($request);
    public function updateUser($id, array $data);
    public function updatePassword($id, $newPassword);
    public function delete($id);
}
