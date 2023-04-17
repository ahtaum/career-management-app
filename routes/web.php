<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\AdminMainController;

// Main
Route::controller(MainController::class)->group(function () {
    Route::get("/", "home")->name("home");
});

// Auth
Route::prefix("auth")->group(function() {

    Route::controller(LoginController::class)->group(function () {
        Route::get("/register", "register")->name("register");
        Route::get("/login", "login")->name("login");

        Route::post("/add", "addUser")->name("addUser");
        Route::post("/authenticate", "authenticate")->name("authenticate");
        Route::post("/logout", "logout")->name("logout");
    });

});

// Admin
Route::prefix("admin")->middleware('auth')->group(function() {

    Route::controller(AdminMainController::class)->group(function() {
        Route::get("/dashboard", "dashboard")->name("dashboard");
        Route::get("/profile", "profile")->name("profile");
    });

});
