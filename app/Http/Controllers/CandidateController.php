<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function candidates() {
        return Inertia::render("admin/Candidates");
    }
}
