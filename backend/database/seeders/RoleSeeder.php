<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Jefe Comercial', 'description' => 'Encargado de liderar y supervisar las actividades comerciales de la empresa. Responsable de la estrategia de ventas y el crecimiento del negocio.'],
            ['name' => 'Customer Service', 'description' => 'Responsable de atender las consultas y problemas de los clientes. Su objetivo es garantizar la satisfacción del cliente y mantener una buena relación con ellos.'],
            ['name' => 'Portero', 'description' => 'Encargado de la seguridad y el control de acceso a las instalaciones de la empresa. Su función incluye verificar la identidad de las personas y prevenir el acceso no autorizado.'],
            ['name' => 'Romana', 'description' => 'Operador de la balanza o báscula industrial (conocida como romana) en la empresa. Responsable de pesar los productos o mercancías y registrar los datos.'],
            ['name' => 'Supervisor', 'description' => 'Es responsable de dirigir y coordinar las actividades de los empleados, asegurando la calidad y eficiencia del trabajo. Supervisa el rendimiento, ofrece retroalimentación y orientación, y gestiona los recursos para alcanzar objetivos específicos.'],
            ['name' => 'Administrador', 'description' => 'Responsable de la gestión y el funcionamiento diario de la empresa. Sus tareas incluyen la planificación, la organización y la supervisión de todas las actividades de la empresa.']
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
