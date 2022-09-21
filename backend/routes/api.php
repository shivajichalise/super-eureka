<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('articles', ArticleController::class);

/* Route::get('/articles', [ArticleController::class, 'index']); */
/* Route::post('/articles', [ArticleController::class, 'store']); */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});
