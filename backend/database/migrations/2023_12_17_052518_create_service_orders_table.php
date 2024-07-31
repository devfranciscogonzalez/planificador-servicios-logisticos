<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_orders', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->string('code');
            $table->foreignId('rate_id')->constrained("rates")->onDelete('cascade');
            $table->foreignId('planning_id')->constrained("plannings")->onDelete('cascade');
            $table->foreignId('schedule_id')->constrained('schedules')->onDelete('cascade');
            $table->foreignId('customer_id')->constrained('customers')->onDelete('cascade');
            $table->foreignId('service_type_id')->constrained('service_types')->onDelete('cascade');
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade');
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('business_id')->constrained('businesses')->onDelete('cascade');
            $table->foreignId('route_id')->constrained('routes')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('reserve')->nullable();
            $table->string('customer_service_name')->nullable();
            $table->string('supervisor_name')->nullable();
            $table->string('container')->nullable();
            $table->string('truck_plate')->nullable();
            $table->dateTime('entry')->nullable();
            $table->dateTime('exit')->nullable();
            $table->dateTime('date_status')->nullable();
            $table->boolean('status');
            $table->boolean('status_end')->nullable();
            $table->text('comment')->nullable();
            $table->decimal('weight_entry', 10, 2)->nullable();
            $table->decimal('weight_exit', 10, 2)->nullable();
            $table->timestamps();
            $table->foreignId('rescheduled_os_id')->nullable()->constrained('service_orders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_orders');
    }
};
