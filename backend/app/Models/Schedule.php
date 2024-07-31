<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'start_time', 'end_time'];

    public function serviceOrders()
    {
        return $this->hasOne(ServiceOrder::class);
    }
}
