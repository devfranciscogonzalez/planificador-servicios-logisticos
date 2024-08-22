<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $services = [
            [
                'name' => "CARGA SUELTA",
                'description' => "Servicio para el manejo y despacho de cargas sueltas que no requieren contenedor.",
                'service_type_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "DRY FULL",
                'description' => "Envío completo de contenedores secos, desde el origen hasta el destino.",
                'service_type_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "CONSOLIDADO SOBRE CAMIÓN",
                'description' => "Movimiento interno de mercancía consolidada sobre camión dentro de la organización.",
                'service_type_id' => 2,
                'user_id' => 2,
            ],
            [
                'name' => "RECEPCIÓN DE CONTENEDORES",
                'description' => "Servicio de recepción y registro de contenedores en almacén.",
                'service_type_id' => 3,
                'user_id' => 2,
            ],
            [
                'name' => "MOVIMIENTO DE PALETS",
                'description' => "Movimiento interno y organización de pallets dentro del almacén.",
                'service_type_id' => 2,
                'user_id' => 1,
            ],
            [
                'name' => "DESPACHO EXPRESS",
                'description' => "Servicio rápido y eficiente de despacho de mercancías.",
                'service_type_id' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "RECEPCIÓN Y CLASIFICACIÓN",
                'description' => "Recepción de productos con clasificación automática según tipo.",
                'service_type_id' => 3,
                'user_id' => 1,
            ],
            [
                'name' => "TRANSPORTE INTERNO",
                'description' => "Movilización de productos y activos dentro de la empresa.",
                'service_type_id' => 2,
                'user_id' => 2,
            ],
            [
                'name' => "RECEPCIÓN DE MATERIA PRIMA",
                'description' => "Recepción y almacenamiento de materias primas.",
                'service_type_id' => 3,
                'user_id' => 1,
            ],
            [
                'name' => "DESPACHO DE PRODUCTOS TERMINADOS",
                'description' => "Envío de productos terminados a los clientes.",
                'service_type_id' => 1,
                'user_id' => 2,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
