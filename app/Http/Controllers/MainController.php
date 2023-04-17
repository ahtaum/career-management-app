<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Company;

class MainController extends Controller
{
    public function home() {
        return Inertia::render("clients/Home", [
            "companies" => Company::all()->first()
        ]);
    }
}
