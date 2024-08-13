<?php

use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\ItemController;
use App\Http\Controllers\Backend\SubCategoryController;
use App\Http\Middleware\IsAuth;
use Illuminate\Support\Facades\Route;


// admin routes
// Route::middleware([IsAuth::class])->group(function () {
Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');
Route::get('/category', [CategoryController::class, 'index'])->name('admin.category');
Route::get('/category-create', [CategoryController::class, 'create'])->name('admin.category.create');
Route::post('/category-store', [CategoryController::class, 'store'])->name('admin.category.store');
Route::get('/category-edit/{id}', [CategoryController::class, 'edit'])->name('admin.category.edit');
Route::post('/category-update/{id}', [CategoryController::class, 'update'])->name('admin.category.update');
Route::get('/category-delete/{id}', [CategoryController::class, 'destroy'])->name('admin.category.destroy');
// });

Route::get('/sub_category', [SubCategoryController::class, 'index'])->name('admin.sub_category');
Route::get('/sub_category-create', [SubCategoryController::class, 'create'])->name('admin.sub_category.create');
Route::post('/sub_category-store', [SubCategoryController::class, 'store'])->name('admin.sub_category.store');
Route::get('/sub_category-edit/{sub_category}', [SubCategoryController::class, 'edit'])->name('admin.sub_category.edit');
Route::post('/sub_category-update/{sub_category}', [SubCategoryController::class, 'update'])->name('admin.sub_category.update');
Route::get('/sub_category-delete/{sub_category}', [SubCategoryController::class, 'destroy'])->name('admin.sub_category.destroy');

Route::get('/item', [ItemController::class, 'index'])->name('admin.item');
Route::get('/item-create', [ItemController::class, 'create'])->name('admin.item.create');
Route::post('/item-store', [ItemController::class, 'store'])->name('admin.item.store');
Route::get('/item-status/{id}', [ItemController::class, 'status'])->name('admin.item.status');
Route::get('/item-edit/{sub_category}', [ItemController::class, 'edit'])->name('admin.item.edit');
Route::post('/item-update/{sub_category}', [ItemController::class, 'update'])->name('admin.item.update');
Route::get('/item-delete/{sub_category}', [ItemController::class, 'destroy'])->name('admin.item.destroy');