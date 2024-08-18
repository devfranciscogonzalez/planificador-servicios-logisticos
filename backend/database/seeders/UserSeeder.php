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
        $porterRoleId = Role::firstOrCreate(['name' => 'Portero'])->id;
        $romanaRoleId = Role::firstOrCreate(['name' => 'Romana'])->id;

        User::create([
            'name' => 'Administrador',
            'email' => 'admin@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('Admin1234'),
            'role_id' => $adminRoleId,
        ]);
        
        User::create([
            'name' => 'Jefe Comercial',
            'email' => 'jefe.comercial@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('Jefe1234'),
            'role_id' => $jefeRoleId,
        ]);
        
        User::create([
            'name' => 'Supervisor',
            'email' => 'supervisor@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('Supervisor1234'),
            'role_id' => $supervisorRoleId,
        ]);
        
        User::create([
            'name' => 'Customer Service',
            'email' => 'customer.service@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('Customer1234'),
            'role_id' => $customerRoleId,
        ]);
        
        User::create([
            'name' => 'Portero',
            'email' => 'portero@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('Portero1234'),
            'role_id' => $porterRoleId,
        ]);
        
        User::create([
            'name' => 'Romana',
            'email' => 'romana@camanchaca.cl',
            'status' => 1,
            'password' => Hash::make('Romana1234'),
            'role_id' => $romanaRoleId,
        ]);
    }
}
