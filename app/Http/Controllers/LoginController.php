<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

use App\Http\Requests\RegisterRequest;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

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

        $avatar = $request->file("avatar")->store("public/avatars");

        User::create([
            "username" => $validatedInput["username"],
            "email" => $validatedInput["email"],
            "password" => Hash::make($validatedInput["password"]),
            "avatar" => ($avatar != '') ? $avatar : "default.png",
        ]);

        return redirect()->back()->with('message', 'Register successfully');
    }

    public function authenticate(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('admin/dashboard');
        }

        return back()->withErrors([
            'all' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request) {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect('auth/login');
    }
}
