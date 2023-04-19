<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

use App\Models\Candidate;
use App\Models\Application;

class CandidateController extends Controller
{
    // Pages
    public function candidates() {
        return Inertia::render("admin/Candidates", [
            "candidates" => Candidate::with(['jobs', 'applications'])->get()
        ]);
    }

    // Process
    public function downloadFile($fileName) {
        return response()->download(public_path('storage/files/' . $fileName));
    }

    public function changeStatus($id, Request $request) {
        $applications = Application::findOrFail($id);
        $applications->status = $request->input("status");
        $applications->save();

        return redirect()->back()->with('message', 'Change Status successfully');
    }

    public function delete($id) {
        $candidates = Candidate::findOrFail($id);

        Storage::delete($candidates->cv);

        $candidates->delete();

        return redirect()->back()->with('message', 'Candidate data successfuly Deleted!');
    }
}
