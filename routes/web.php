<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'homepage']);
Route::get('/about', [PageController::class, 'about']);

// CRUD Routes
Route::get('/crud', [PostController::class, 'index'])->name('crud.index');
Route::get('/crud/create', [PostController::class, 'create']);
Route::post('/crud', [PostController::class, 'store']);
Route::get('/crud/{post}/edit', [PostController::class, 'edit']);
Route::put('/crud/{post}', [PostController::class, 'update']);
Route::delete('/crud/{id}/delete', [PostController::class, 'destroy']);
