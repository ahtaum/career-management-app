<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\UpdateUserRequest;

use App\Models\User;
use App\Models\Job;
use App\Models\Candidate;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminMainController extends Controller
{
    // Pages
    public function dashboard() {
        return Inertia::render("admin/Dashboard", [
            "total_jobs" => Job::all()->count(),
            "total_candidates" => Candidate::all()->count()
        ]);
    }

    public function profile() {
        return Inertia::render("admin/Profile");
    }

    // Process
    public function changeProfile($id, UpdateUserRequest $request) {
        $dataProfileValidated = $request->validated();

        $profile = User::findOrFail($id);
        $profile->username = $dataProfileValidated["username"];

        if (isset($dataProfileValidated["email"])) {
            $profile->email = $dataProfileValidated["email"];
        }

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = $avatar->hashName('public/avatars');
            $profile->avatar = $filename;

            if ($profile->getOriginal('avatar') !== null) {
                Storage::delete($profile->getOriginal('avatar'));
            }

            $avatar->store('public/avatars');
        }

        $profile->save();

        Auth::login($profile);

        return redirect()->back()->with('message', 'User Profile successfuly Change!');
    }

    public function changePassword($id, ChangePasswordRequest $request) {
        $passwordValidated = $request->validated();

        $profile = User::findOrFail($id);
        $profile->password = Hash::make($passwordValidated["password"]);
        $profile->save();

        Auth::login($profile);

        return redirect()->back()->with('message', 'User Password successfuly Change!');
    }
}
