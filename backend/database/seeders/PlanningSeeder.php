<?php

namespace Database\Seeders;

use App\Models\Planning;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanningSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plannings = [
            ['name' => 'No planificado', 'days' => 0],
            ['name' => 'Diario', 'days' => 1],
            ['name' => 'Semanal', 'days' => 7],
            ['name' => 'Mensual', 'days' => 30]
        ];

        foreach ($plannings as $planning) {
            Planning::create($planning);
        }
    }
}
