<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $rules = [
            'username' => ['required', 'string'],
            'avatar' => ['nullable'],
        ];

        if ($this->input('email') !== $this->user()->email) {
            $rules['email'] = ['unique:users', 'email'];
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'username.required' => 'Username harus diisi.',
            'username.string' => 'Username harus berupa string.',
            'email.unique' => 'Email sudah digunakan.',
            'email.email' => 'Email harus berupa alamat email yang valid.',
        ];
    }
}
