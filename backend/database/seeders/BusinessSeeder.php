<?php

namespace Database\Seeders;

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Business;

class BusinessSeeder extends Seeder
{
    public function run()
    {
        $businesses = [
            ['name' => 'Otras Cargas', 'description' => 'Negocios relacionados con el transporte y manejo de cargas variadas y especiales.'],
            ['name' => 'Metal Mecánico', 'description' => 'Empresas enfocadas en la industria del metal, incluyendo fabricación y mecanizado.'],
            ['name' => 'Madera Consolidada', 'description' => 'Negocios especializados en el procesamiento y distribución de madera consolidada.'],
            ['name' => 'Madera', 'description' => 'Empresas dedicadas al manejo y comercio de madera en sus distintas formas y derivados.'],
            ['name' => 'Fertilizantes', 'description' => 'Negocios implicados en la producción y distribución de fertilizantes para la agricultura.']
        ];

        foreach ($businesses as $business) {
            Business::create($business);
        }
    }
}
