<?php

namespace Database\Seeders;

use App\Models\Planning;
use Illuminate\Database\Seeder;

class PlanningSeeder extends Seeder
{
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
