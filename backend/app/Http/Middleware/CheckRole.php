<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Log;
use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, $roles)
    {
        $rolesArray = explode('.', $roles);
        $userRole = $request->user()->role->name ?? null;
        Log::info('User role: ' . print_r($rolesArray,true));
        Log::info('User: ' . $userRole);


        if (!$userRole || !in_array($userRole, $rolesArray)) {
            abort(403, 'Acceso no autorizado, no tiene el rol pertinente.');
        }

        return $next($request);
    }
}
