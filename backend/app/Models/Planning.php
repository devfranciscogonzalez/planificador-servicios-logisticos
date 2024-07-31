<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planning extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','days'
    ];

    public function serviceOrders()
    {
        return $this->hasOne(ServiceOrder::class);
    }
}
