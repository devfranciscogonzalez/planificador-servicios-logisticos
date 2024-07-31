<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\UserRepositoryInterface;
use App\Repositories\UserRepository;
use App\Interfaces\RoleRepositoryInterface;
use App\Repositories\RoleRepository;
use App\Interfaces\CustomerRepositoryInterface;
use App\Repositories\CustomerRepository;
use App\Interfaces\ServiceRepositoryInterface;
use App\Repositories\ServiceRepository;
use App\Interfaces\ServiceTypeRepositoryInterface;
use App\Repositories\ServiceTypeRepository;
use App\Interfaces\ProductRepositoryInterface;
use App\Repositories\ProductRepository;
use App\Interfaces\BusinessRepositoryInterface;
use App\Repositories\BusinessRepository;
use App\Interfaces\RateRepositoryInterface;
use App\Repositories\RateRepository;
use App\Interfaces\RouteRepositoryInterface;
use App\Repositories\RouteRepository;
use App\Interfaces\PlanningRepositoryInterface;
use App\Repositories\PlanningRepository;
use App\Interfaces\ScheduleRepositoryInterface;
use App\Repositories\ScheduleRepository;
use App\Interfaces\ServiceOrderRepositoryInterface;
use App\Repositories\ServiceOrderRepository;
use App\Interfaces\AccumulatorRepositoryInterface;
use App\Repositories\AccumulatorRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(RoleRepositoryInterface::class, RoleRepository::class);
        $this->app->bind(CustomerRepositoryInterface::class, CustomerRepository::class);
        $this->app->bind(ServiceRepositoryInterface::class, ServiceRepository::class);
        $this->app->bind(ServiceTypeRepositoryInterface::class, ServiceTypeRepository::class);
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
        $this->app->bind(BusinessRepositoryInterface::class, BusinessRepository::class);
        $this->app->bind(RateRepositoryInterface::class, RateRepository::class);
        $this->app->bind(RouteRepositoryInterface::class, RouteRepository::class);
        $this->app->bind(PlanningRepositoryInterface::class, PlanningRepository::class);
        $this->app->bind(ScheduleRepositoryInterface::class, ScheduleRepository::class);
        $this->app->bind(ServiceOrderRepositoryInterface::class, ServiceOrderRepository::class);
        $this->app->bind(AccumulatorRepositoryInterface::class, AccumulatorRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
