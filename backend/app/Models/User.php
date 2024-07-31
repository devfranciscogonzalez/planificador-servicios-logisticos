<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'status',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    /**
     * Obtener el rol del usuario.
     * relacion: uno a uno
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Verifica si el usuario tiene un rol específico.
     */
    public function hasRole($role)
    {
        return $this->role->name === $role;
    }

    /**
     * Obtener los clientes del usuario.
     */
    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    public function service()
    {
        return $this->hasOne(Service::class);
    }

    /**
     * Obtener los clientes del usuario.
     */
    public function product()
    {
        return $this->hasOne(Product::class);
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
