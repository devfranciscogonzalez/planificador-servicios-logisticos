<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Product;
use App\Models\Service;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    $this->call([
      RoleSeeder::class,
      BusinessSeeder::class,
      UserSeeder::class,
      ServiceTypeSeeder::class,
      PlanningSeeder::class,
      RouteSeeder::class,
      ScheduleSeeder::class,
      ServiceSeeder::class,
      ProductSeeder::class,
      CustomerSeeder::class,
    ]);

    // \App\Models\User::factory(10)->create();

    // \App\Models\User::factory()->create([
    //     'name' => 'Test User',
    //     'email' => 'test@example.com',
    // ]);
  }
}
