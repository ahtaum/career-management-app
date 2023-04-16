<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MainController;

Route::controller(MainController::class)->group(function () {
    Route::get("/", "home")->name("home");
});
