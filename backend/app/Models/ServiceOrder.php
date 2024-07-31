<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'code',
        'rate_id',
        'planning_id',
        'schedule_id',
        'customer_id',
        'service_type_id',
        'service_id',
        'product_id',
        'business_id',
        'route_id',
        'container',
        'truck_plate',
        'entry',
        'exit',
        'date_status',
        'weight_entry',
        'weight_exit',
        'status',
        'status_end',
        'status_date',
        'comment',
        'user_id',
        'reserve',
        'customer_service_name',
        'supervisor_name'
    ];

    public function rate()
    {
        return $this->belongsTo(Rate::class);
    }

    public function planning()
    {
        return $this->belongsTo(Planning::class);
    }

    public function schedule()
    {
        return $this->belongsTo(Schedule::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function serviceType()
    {
        return $this->belongsTo(ServiceType::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
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
}
