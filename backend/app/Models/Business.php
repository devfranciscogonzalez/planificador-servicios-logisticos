<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;


    protected $fillable = [
        'name', 'description'
    ];

    public function product()
    {
        return $this->hasOne(Product::class);
    }

    public function service()
    {
        return $this->hasOne(Service::class);
    }

    public function rate()
    {
        return $this->hasOne(Rate::class);
    }
}
