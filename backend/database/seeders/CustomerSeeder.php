<?php

namespace Database\Seeders;

use App\Models\Customer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                'logo' => "logos/4xSTxpXkoMxF9TnKQbHcQjZZ8jgdpGWPfeRWeaQk.png",
                'status' => 1,
                'user_id' => 1,
            ],
            [
                'name' => "MASISA",
                'description' => "Masisa es una empresa que fabrica y comercializa tableros de madera para muebles y arquitectura de interiores. Descubre nuestros productos e inspírate.",
                'logo' => "logos/1FgzZVi97ncIAw9kl6ur9Br5ZnVMuBPlgG4yQOze.jpg",
                'status' => 1,
                'user_id' => 1,
            ],

        ];

        foreach ($customers as $customer) {
            Customer::create($customer);
        }
    }
}
