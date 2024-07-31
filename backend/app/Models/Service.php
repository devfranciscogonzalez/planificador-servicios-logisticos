<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'service_type_id', 'user_id'];


    public function serviceType()
    {
        return $this->belongsTo(ServiceType::class)->select(['id', 'name', 'description']);
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
