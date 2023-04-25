<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\CompanyRequest;
use App\Http\Requests\UpdateUserRequest;

use App\Models\User;
use App\Models\Job;
use App\Models\Candidate;
use App\Models\Company;
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

    public function companies() {
        $data = Company::all()->first();
        $companies = [];

        $logoUrl = Storage::url($data->logo);
        array_push($companies, [
            'address' => $data->address,
            'created_at' => $data->created_at,
            'description' => $data->description,
            'id' => $data->id,
            'info' => $data->info,
            'logo' => $logoUrl,
            'name' => $data->name,
            'updated_at' => $data->updated_at,
        ]);

        return Inertia::render("admin/Companies", [
            "companies" => $companies[0]
        ]);
    }

    public function changeCompanyProfile($id) {
        return Inertia::render("admin/ChangeCompanyProfile", [
            "company" => Company::findOrFail($id)
        ]);
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

    public function editCompanyProfile($id, CompanyRequest $request) {
        $validated = $request->validated();

        $company = Company::findOrFail($id);
        $company->name = $validated["name"];
        $company->address = $validated["address"];
        $company->info = $validated["info"];
        $company->description = $validated["description"];

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $filename = $logo->hashName('public/logo');
            $company->logo = $filename;

            if ($company->getOriginal('logo') !== null) {
                Storage::delete($company->getOriginal('logo'));
            }

            $logo->store('public/logo');
        }

        $company->save();

        return redirect()->back()->with('message', 'Company Profile has successfuly Change!');
    }
}
