<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\JobsDataController;
use App\Http\Controllers\Api\CandidatesDataController;

// Jobs
Route::controller(JobsDataController::class)->prefix("jobs")->group(function () {
    Route::get("/", "getJobs");
    Route::get("/{id}", "getJob");
});

Route::controller(CandidatesDataController::class)->prefix("candidates")->group(function () {
    Route::get("/", "getCandidates");
    Route::get("/{id}", "getCandidate");
});

// Authentication
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});