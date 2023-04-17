<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JobController extends Controller
{
    public function jobs() {
        return Inertia::render("admin/Jobs");
    }
}
