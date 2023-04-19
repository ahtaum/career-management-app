<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Http\Requests\ApplyJobRequest;

use App\Models\Application;
use App\Models\Candidate;
use App\Models\Company;
use App\Models\Job;

class MainController extends Controller
{
    // Pages
    public function home() {
        return Inertia::render("clients/Home", [
            "companies" => Company::all()->first(),
            "jobs" => Job::all()
        ]);
    }

    public function detailsJob($id) {
        return Inertia::render("clients/Job", [
            "job" => Job::findOrFail($id)
        ]);
    }

    // Process
    public function applyJob(ApplyJobRequest $request) {
        $dataValidated = $request->validated();

        $cv = $request->file("cv")->store("public/files");

        $candidate = Candidate::create([
            "job_id" => $dataValidated["job_id"],
            "email" => $dataValidated["email"],
            "name" => $dataValidated["name"],
            "cv" => $cv,
            "gender" => $dataValidated["gender"],
            "address" => $dataValidated["address"],
            "about" => $dataValidated["about"]
        ]);

        Application::create([
            "candidate_id" => $candidate->id,
            "job_id" => $dataValidated["job_id"],
            "track_id" => Str::random(10),
            "status" => "pending"
        ]);

        return redirect()->back()->with('message', 'Apply Job successfully');
    }
}
