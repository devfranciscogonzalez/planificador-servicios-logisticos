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
                'name' => 'Cemento',
                'description' => 'Cementos Cbb 25 Kilos,fabricado principalmente con materiales provenientes de yacimientos propios, los que son dosificados de forma precisa para obtener productos de características estables. ',
                'status' => true,
                'logo' => 'logos/2MyBtjpw9Bkiij8c0050vAfzOcjzmOQOp6YwnLWu.jpg',
                'business_id' => 1,
                'user_id' => 1,
            ],
            [
                'name' => 'Palet',
                'description' => 'Palet de madera',
                'status' => true,
                'logo' => 'logos/BySVOORdp1JH85SB80rzwH59D5C4ZBXa1i56fQ8p.jpg',
                'business_id' => 1,
                'user_id' => 1,
            ],

        ];
        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
