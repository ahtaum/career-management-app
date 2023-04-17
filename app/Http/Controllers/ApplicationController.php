<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function applications() {
        return Inertia::render("admin/Applications");
    }
}
