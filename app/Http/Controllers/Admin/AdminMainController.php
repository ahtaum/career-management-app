<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminMainController extends Controller
{
    public function dashboard() {
        return Inertia::render("admin/Dashboard");
    }
}
