<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Log;
use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!$request->user()) {
            abort(401, 'Usuario no autenticado.');
        }

        $userRole = $request->user()->role->name ?? null;

        if (!$userRole) {
            abort(403, 'El usuario no tiene un rol asignado.');
        }

        if (!in_array($userRole, $roles)) {
            abort(403, 'Acceso no autorizado, no tiene el rol pertinente.');
        }

        return $next($request);
    }
}