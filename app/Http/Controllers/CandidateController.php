<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Candidate;
use Illuminate\Support\Facades\Storage;

class CandidateController extends Controller
{
    // Pages
    public function candidates() {
        return Inertia::render("admin/Candidates", [
            "candidates" => Candidate::all()
        ]);
    }

    // Process
    public function downloadFile($fileName) {
        // $file = str_replace("public/files/", "", $fileName);

        // if (!Storage::exists($file)) {
        //     abort(404);
        // }

        // return Storage::download($file);

        return response()->download(public_path('storage/files/' . $fileName));
    }
}
