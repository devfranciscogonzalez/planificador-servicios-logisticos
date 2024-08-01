<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    public function run()
    {
        $adminRoleId = Role::firstOrCreate(['name' => 'Administrador'])->id;
        $jefeRoleId = Role::firstOrCreate(['name' => 'Jefe Comercial'])->id;
        $supervisorRoleId = Role::firstOrCreate(['name' => 'Supervisor'])->id;
        $customerRoleId = Role::firstOrCreate(['name' => 'Customer Service'])->id;
        $porteroRoleId = Role::firstOrCreate(['name' => 'Portero'])->id;
        $romanaRoleId = Role::firstOrCreate(['name' => 'Romana'])->id;

        User::create([
            'name' => 'Administrador',
            'email' => 'admin@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('asdasd'),
            'role_id' => $adminRoleId,
        ]);

        User::create([
            'name' => 'Jefe Comercial',
            'email' => 'jefe.comercial@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('asdasd'),
            'role_id' => $jefeRoleId,
        ]);

        User::create([
            'name' => 'Supervisor',
            'email' => 'supervisor@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('asdasd'),
            'role_id' => $supervisorRoleId,
        ]);

        User::create([
            'name' => 'Customer Service',
            'email' => 'customer.service@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('asdasd'),
            'role_id' => $customerRoleId,
        ]);

        User::create([
            'name' => 'Portero',
            'email' => 'portero@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('asdasd'),
            'role_id' => $porteroRoleId,
        ]);

        User::create([
            'name' => 'Romana',
            'email' => 'romana@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('asdasd'),
            'role_id' => $romanaRoleId,
        ]);
    }
}
