<?php

namespace Database\Seeders;

use App\Models\Route;
use Illuminate\Database\Seeder;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $routes = [
            "PTO.LIRQUEN/ROCUANT/PTO.LIRQUEN",
            "P.FOODCORP CORONEL/ROCUANT",
            "PTO. LIRQUEN/ROCUANT",
            "PTO.LIRQUEN/ROCUANT/PTO.CORONEL",
            "PTO.CORONEL/ROCUANT/PTO.CORONEL",
            "PTO. CORONEL/ROCUANT",
            "SAN VICENTE/ROCUANT",
            "ROCUANT/PARGUA",
            "YEVENES",
            "ROCUANT/PTO. LIRQUEN",
            "SAN VICENTE/ROCUANT/SAN VICENTE",
            "ROCUANT/PTO. CORONEL",
            "ROCUANT/P.FOODCORP CORONEL",
            "PARGUA/ROCUANT",
            "SAN VICENTE/ROCUANT/PTO. CORONEL",
            "ROCUANT/OSORNO",
            "ROCUANT",
            "ROCUANT/SAN VICENTE"
        ];

        foreach ($routes as $route) {
            Route::create(['name' => $route]);
        }
    }
}
