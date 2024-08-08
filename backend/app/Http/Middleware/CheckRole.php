<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, $roles)
    {
        $rolesArray = explode(',', $roles);
        
        if (!$request->user() || !in_array($request->user()->role->name, $rolesArray)) {
            abort(403, 'Acceso no autorizado, no tiene el rol pertinente.');
        }

        return $next($request);
    }
}
