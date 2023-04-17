<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;

Route::controller(MainController::class)->group(function () {
    Route::get("/", "home")->name("home");
});

Route::prefix("auth")->group(function() {
    Route::controller(LoginController::class)->group(function () {
        Route::get("/register", "register")->name("register");

        Route::post("/add", "addUser")->name("addUser");
    });
});
