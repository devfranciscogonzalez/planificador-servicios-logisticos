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
            [
                'name' => 'Jefe Comercial',
                'description' => 'Lidera la gestión comercial de la empresa, supervisando usuarios, productos, servicios, clientes y tarifas. Asegura la correcta ejecución de órdenes de servicio y coordina el flujo logístico desde la recepción hasta la salida de mercancías.'
            ],
            [
                'name' => 'Customer Service',
                'description' => 'Gestiona las órdenes de servicio y facilita el proceso de recepción de camiones. Actúa como enlace principal con los clientes, garantizando la eficiencia en la operación y la satisfacción del cliente.'
            ],
            [
                'name' => 'Supervisor',
                'description' => 'Coordina la ejecución de las órdenes de servicio, asegurando la correcta recepción y documentación de mercancías. Supervisa el rendimiento y la calidad del trabajo en todas las etapas del proceso.'
            ],
            [
                'name' => 'Portero',
                'description' => 'Controla el acceso de los camiones a las instalaciones, garantizando la seguridad y el correcto registro de las entradas y salidas de vehículos.'
            ],
            [
                'name' => 'Romana',
                'description' => 'Responsable de pesar los camiones en su ingreso y salida de la empresa, registrando los datos de manera precisa para asegurar la correcta gestión de las mercancías.'
            ],
            [
                'name' => 'Administrador',
                'description' => 'Gestiona integralmente los sistemas de TI de la empresa, incluyendo la administración de usuarios, productos, servicios, clientes y tarifas en la plataforma. Asegura el correcto funcionamiento y optimización de las soluciones tecnológicas, facilitando la operatividad y eficiencia de la empresa.'
            ],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
