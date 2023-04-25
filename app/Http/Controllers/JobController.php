<?php

namespace App\Http\Controllers;

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

    public function editJob($id) {
        return Inertia::render("admin/EditJob", [
            "job" => Job::findOrFail($id)
        ]);
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

    public function update($id, CreateJobRequest $request) {
        $jobsDataValidated = $request->validated();

        $job = Job::findOrFail($id);
        $job->title = $jobsDataValidated["title"];
        $job->salary = $jobsDataValidated["salary"];
        $job->info = $jobsDataValidated["info"];
        $job->description = $jobsDataValidated["description"];
        $job->level = $jobsDataValidated["level"];
        $job->save();

        return redirect()->back()->with('message', 'Edit Post Job successfully');
    }

    public function delete($id) {
        Job::findOrFail($id)->delete();

        return redirect()->back()->with('message', 'Post Job Deleted');
    }
}
