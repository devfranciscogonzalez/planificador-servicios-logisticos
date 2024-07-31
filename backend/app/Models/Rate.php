<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'customer_id',
        'service_type_id',
        'service_id',
        'product_id',
        'business_id',
        'route_id',
        'start_date',
        'end_date',
        'status',
        'price',
        'currency',
        'user_id'
    ];

    protected static function boot()
    {
        parent::boot();

        static::created(function ($rate) {
            $rate->code = 'TARIFA' . str_pad($rate->id, 4, '0', STR_PAD_LEFT);
            $rate->save();
        });
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function serviceType()
    {
        return $this->belongsTo(ServiceType::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function business()
    {
        return $this->belongsTo(Business::class);
    }

    public function route()
    {
        return $this->belongsTo(Route::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function serviceOrders()
    {
        return $this->hasOne(ServiceOrder::class);
    }
}
