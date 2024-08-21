<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/usuario', function (Request $request) {
    return "Bienvenidos a mi API REST en laravel 11";
});
Route::get('/usuario/{id}', function (Request $request) {
    return "Consultando un solo usuario";
});
