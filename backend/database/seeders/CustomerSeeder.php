<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $customers = [
            [
                'name' => "ARAUCO",
                'description' => "Celulosa Arauco y Constitución es una empresa chilena dedicada a la fabricación de pulpa de celulosa, madera aserrada, paneles y energía renovable",
                'logo' => "logos/customers/ARAUCO.webp",
                'status' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "MASISA",
                'description' => "Masisa es una empresa que fabrica y comercializa tableros de madera para muebles y arquitectura de interiores. Descubre nuestros productos e inspírate.",
                'logo' => "logos/customers/MASISA.webp",
                'status' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "CAP",
                'description' => "CAP es una empresa multinacional chilena, dedicada a la industria de la minería y metalurgia. Es un importante productor mundial de hierro, el cual es exportado principalmente a países como China, Japón y Baréin.",
                'logo' => "logos/customers/CAP.webp",
                'status' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "CEMENTOS MELON",
                'description' => "Melón cuenta con una cobertura de más de 50 plantas hormigoneras, con presencia en todo el territorio nacional. En 2021, la empresa amplió su presencia hacia el sur de Chile con la planta de molienda de Punta Arenas, en la región de Magallanes, la más austral de su tipo en Sudamérica.",
                'logo' => "logos/customers/CEMENTOS_MELON.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "DINAMIS",
                'description' => "Es una empresa de la region del Bio Bio con mas de 20 años de experiencia en el rubro Logístico, prestando servicios de Transporte por Carretera de sustancias peligrosas, contenedores reefers y unidades dry desde Antofagasta a Quellon",
                'logo' => "logos/customers/DINAMIS.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "CMPC",
                'description' => "Empresas CMPC, conocida también como La Papelera, es un holding forestal y papelero chileno controlado por la familia Matte.",
                'logo' => "logos/customers/CMPC.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "FOODCORP",
                'description' => "Es una empresa con una gran tradición en la industria pesquera. Todos sus recursos son capturados desde las ricas y puras aguas del Océano Pacífico Sur .",
                'logo' => "logos/customers/FOODCORP.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "LANDES",
                'description' => "Compañía local que nació hace más de medio siglo en Talcahuano, al sur de Chile.",
                'logo' => "logos/customers/LANDES.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "MOLINEARA ITATA",
                'description' => "Ubicados en la región de Ñuble, Molinera Itata S.A. y Exportadora Itata SPA. son parte del Holding Heredia Compañía con más de 70 años de historia en el rubro agroindustrial y de Agrícola Santa Matilde de la familia Martínez Chavarría, destacados agricultores que han liderado el desarrollo agronómico en la región.",
                'logo' => "logos/customers/MOLINERA_ITATA.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "NITTO",
                'description' => "Nitto Denko Corporation es una empresa japonesa que produce cintas, vinilo, LCD, aislamiento y varios otros productos.",
                'logo' => "logos/customers/NITTO.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "NUTRECO",
                'description' => "Es un productor holandés de nutrición animal, alimentos para peces y productos de carne procesada. Tiene en torno de 100 instalaciones de producción en más de 30 países, y ocho centros de investigación.",
                'logo' => "logos/customers/NUTRECO.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "PROYECTA CORP",
                'description' => "Proyecta produce y exporta productos del mar sustentables y de alta calidad a los distintos mercados internacionales.",
                'logo' => "logos/customers/PROYECTA_CORP.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "SANO",
                'description' => "SANO entrega a los agricultores sus 40 años de experiencia y conocimiento en el mercado de la nutrición animal.",
                'logo' => "logos/customers/SANO.webp",
                'status' => 1,
                'user_id' => 2,
            ],
            [
                'name' => "TERRAMAR",
                'description' => "Proveedor de materias primas necesarias para la alimentación animal.",
                'logo' => "logos/customers/TERRAMAR.webp",
                'status' => 1,
                'user_id' => 2,
            ],
        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }
    }
}
