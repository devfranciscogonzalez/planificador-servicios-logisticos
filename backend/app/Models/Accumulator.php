<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accumulator extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_order_id',
        'rate_id',
        'price',
        'currency'
    ];
    
}
