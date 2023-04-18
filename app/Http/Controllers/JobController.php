<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Requests\CreateJobRequest;

use App\Models\Job;

class JobController extends Controller
{
    // Pages
    public function jobs() {
        return Inertia::render("admin/Jobs", [
            "jobs" => Job::all()
        ]);
    }

    public function addJob() {
        return Inertia::render("admin/AddJob");
    }

    // Process
    public function store(CreateJobRequest $request) {
        $jobsDataValidated = $request->validated();

        Job::create([
            "title" => $jobsDataValidated["title"],
            "description" => $jobsDataValidated["description"],
            "info" => $jobsDataValidated["info"],
            "salary" => $jobsDataValidated["salary"],
            "level" => $jobsDataValidated["level"]
        ]);

        return redirect()->back()->with('message', 'Post Job successfully');
    }
}
