<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }

    // Overriding handle method from Middleware
    public function handle($request, Closure $next, ...$guards){

      // Faking the bearer header for security
      if($sanctum = $request->cookie('sanctum')){
        $request->headers->set('Authorization', 'Bearer ' . $sanctum);
      }

      $this->authenticate($request, $guards);

      return $next($request);
    }
}
