<?php

namespace Database\Seeders;

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
  }
}
