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
                'description' => "prueba",
                'service_type_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "DRY FULL",
                'description' => "prueba",
                'service_type_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "CONSOLIDADO SOBRE CAMIÓN",
                'description' => "prueba",
                'service_type_id' => 2,
                'user_id' => 1,
            ],
            [
                'name' => "DRY FULL",
                'description' => "DRY FULL",
                'service_type_id' => 3,
                'user_id' => 1,
            ]
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
