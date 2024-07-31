<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'status',
        'logo',
        'user_id'
    ];

    /**
     * Obtener el usuario al que pertenece el cliente.
     */
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
