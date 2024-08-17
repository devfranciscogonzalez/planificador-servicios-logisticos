<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'name' => 'ABALONES',
                'description' => 'Los haliótidos son una familia de moluscos gasterópodos con un único género, Haliotis. Son conocidos como abalones, u orejas de mar, aunque se les conoce con otros nombres dependiendo del país.',
                'status' => true,
                'logo' => 'logos/products/ABALONES.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'ALAMBRE',
                'description' => 'Es un hilo de acero que puede tener varios grosores dependiendo del uso que vaya a recibir. Se utiliza en la construcción, en la industria y en la artesanía.',
                'status' => true,
                'logo' => 'logos/products/ALAMBRE.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'ATUN',
                'description' => 'El grupo Thunnus es un género de peces óseos marinos con menos de diez especies incluidas en él. El nombre común es el de atún o tuna en Estados Unidos, Honduras, Panamá y Puerto Rico​, aunque bajo este nombre se conocen de forma informal otros peces pertenecientes a géneros diferentes.',
                'status' => true,
                'logo' => 'logos/products/ATUN.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'AVENA',
                'description' => 'Avena es un género de plantas de la familia de las poáceas, ​ utilizada como alimento y como forraje. Si bien en épocas tempranas la avena no tuvo la importancia del trigo o la cebada, en Asia Central se cultivaba en buena cantidad, aunque se la consideraba una mala hierba.',
                'status' => true,
                'logo' => 'logos/products/AVENA.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'AZUFRE',
                'description' => 'Es un elemento químico esencial constituyente de los aminoácidos cisteina y metionina​ y, por consiguiente, necesario para la síntesis de proteínas presentes en todos los organismos vivos. Se usa principalmente como fertilizante, pero también en la fabricación de pólvora, laxantes, fósforos e insecticidas.',
                'status' => true,
                'logo' => 'logos/products/AZUFRE.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'CARTON',
                'description' => 'El cartón es un material formado por varias capas de papel superpuestas y adheridas unas a otras​, a base de fibra virgen o de papel reciclado. El cartón es más grueso, duro y resistente que el papel. Algunos tipos de cartón son usados para fabricar embalajes y envases, básicamente cajas de diversos tipos.',
                'status' => true,
                'logo' => 'logos/products/CARTON.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'CHAPA GALVANIZADA',
                'description' => 'La chapa galvanizada es una lámina de acero recubierta con zinc, utilizada en la construcción por su resistencia a la corrosión.',
                'status' => true,
                'logo' => 'logos/products/CHAPA_GALVANIZADA.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'CLAVOS',
                'description' => 'Los clavos son elementos esenciales en la carpintería y la construcción, disponibles en diversos tamaños y formas.',
                'status' => true,
                'logo' => 'logos/products/CLAVOS.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'ECOPLAC',
                'description' => 'Ecoplac es un material ecológico utilizado en construcción, conocido por su resistencia y sostenibilidad.',
                'status' => true,
                'logo' => 'logos/products/ECOPLAC.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'FERTILIZANTE',
                'description' => 'El fertilizante es un producto utilizado para enriquecer el suelo y mejorar el crecimiento de las plantas.',
                'status' => true,
                'logo' => 'logos/products/FERTILIZANTE.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'JUREL CONGELADO',
                'description' => 'El jurel congelado es un pescado popular en la cocina, apreciado por su sabor y facilidad de preparación.',
                'status' => true,
                'logo' => 'logos/products/JUREL_CONGELADO.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'MEJILLONES',
                'description' => 'Los mejillones son moluscos marinos, ricos en proteínas y minerales, consumidos en diversas preparaciones culinarias.',
                'status' => true,
                'logo' => 'logos/products/MEJILLONES.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'PALLET',
                'description' => 'Los pallets son estructuras de madera o plástico utilizadas en la logística para facilitar el transporte y almacenamiento de mercancías.',
                'status' => true,
                'logo' => 'logos/products/PALLET.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'PIEDRA CALIZA',
                'description' => 'La piedra caliza es un material natural utilizado en la construcción y fabricación de cemento, apreciada por su durabilidad.',
                'status' => true,
                'logo' => 'logos/products/PIEDRA_CALIZA.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'SALMON',
                'description' => 'El salmón es un pescado rico en omega-3, muy popular en la gastronomía por su sabor y beneficios para la salud.',
                'status' => true,
                'logo' => 'logos/products/SALMON.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'TRIMETHYLAMINE',
                'description' => 'La trimetilamina es un compuesto químico que se utiliza en la industria para la producción de varios productos químicos.',
                'status' => true,
                'logo' => 'logos/products/TRIMETHYLAMINE.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'UREA',
                'description' => 'La urea es un compuesto químico utilizado en fertilizantes y en la industria química para diversas aplicaciones.',
                'status' => true,
                'logo' => 'logos/products/UREA.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'VINO',
                'description' => 'El vino es una bebida alcohólica elaborada a partir de la fermentación de uvas, disfrutada en todo el mundo por su sabor y tradición.',
                'status' => true,
                'logo' => 'logos/products/VINO.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'YESO',
                'description' => 'El yeso es un material de construcción utilizado para enlucir paredes y techos, apreciado por su acabado liso y duradero.',
                'status' => true,
                'logo' => 'logos/products/YESO.webp',
                'business_id' => 1,
                'user_id' => 1,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
