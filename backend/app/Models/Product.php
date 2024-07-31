<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'status',
        'logo',
        'business_id',
        'user_id'
    ];

    public function business()
    {
        return $this->belongsTo(Business::class)->select(['id', 'name']);
    }

    public function user()
    {
        return $this->belongsTo(User::class)->select(['id', 'name', 'email', 'role_id']);
    }
    public function rate()
    {
        return $this->hasOne(Rate::class);
    }

    public function serviceOrders()
    {
        return $this->hasOne(ServiceOrder::class);
    }
}
