<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

use App\Http\Requests\RegisterRequest;

use App\Models\User;

class LoginController extends Controller
{
    // Pages
    public function register() {
        return Inertia::render("auth/Register");
    }

    public function login() {
        return Inertia::render("auth/Login");
    }

    // Process
    public function addUser(RegisterRequest $request) {
        $validatedInput = $request->validated();

        User::create([
            "username" => $validatedInput["username"],
            "email" => $validatedInput["email"],
            "password" => Hash::make($validatedInput["password"]),
            "avatar" => $validatedInput["avatar"],
        ]);

        return redirect()->back()->with('message', 'Register successfully');
    }
}
