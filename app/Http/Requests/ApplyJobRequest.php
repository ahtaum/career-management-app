<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplyJobRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'job_id' => 'nullable',
            'email' => 'required|string|unique:users,email',
            'name' => 'required|string',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:2048',
            'gender' => 'nullable|string',
            'address' => 'required|string',
            'linkedin' => 'nullable|url',
            'about' => 'nullable|string',
        ];
    }
}
