<?php

namespace Database\Seeders;

use App\Models\Schedule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    public function run()
    {
        $schedules = [
            ['name' => '06:00 - 08:00', 'start_time' => '06:00', 'end_time' => '08:00'],
            ['name' => '08:00 - 10:00', 'start_time' => '08:00', 'end_time' => '10:00'],
            ['name' => '10:00 - 12:00', 'start_time' => '10:00', 'end_time' => '12:00'],
            ['name' => '12:00 - 14:00', 'start_time' => '12:00', 'end_time' => '14:00'],
            ['name' => '14:00 - 16:00', 'start_time' => '14:00', 'end_time' => '16:00'],
            ['name' => '16:00 - 18:00', 'start_time' => '16:00', 'end_time' => '18:00'],
            ['name' => '18:00 - 20:00', 'start_time' => '18:00', 'end_time' => '20:00'],
            ['name' => '20:00 - 22:00', 'start_time' => '20:00', 'end_time' => '22:00'],
        ];

        foreach ($schedules as $schedule) {
            Schedule::create($schedule);
        }
    }
}
