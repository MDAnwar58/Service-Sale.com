<?php

namespace App\Providers;

use App\Http\Middleware\IsAuth;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        // Parent boot method call
        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapCustomRoutes(); // Add this line
    }

    /**
     * Define the custom API routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapCustomRoutes()
    {
        Route::prefix('/admin')
            ->namespace($this->namespace)
            ->group(base_path('routes/admin.php'));
    }
}
