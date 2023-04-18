<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

use App\Models\Job;
use App\Models\Candidate;

class AdminMainController extends Controller
{
    public function dashboard() {
        return Inertia::render("admin/Dashboard", [
            "total_jobs" => Job::all()->count(),
            "total_candidates" => Candidate::all()->count()
        ]);
    }

    public function profile() {
        $data = Storage::url("public/avatars/gQbveAGDBprAOf8yWNFpxEJu1KDfK7bNwHdDrWoU.png");

        // dd($data);

        return Inertia::render("admin/Profile");
    }
}
