<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateJobRequest extends FormRequest
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
            'title' => 'required|string',
            'description' => 'required|string',
            'info' => 'required|string',
            'salary' => 'required|integer',
            'level' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'The title field is required.',
            'description.required' => 'The description field is required.',
            'info.required' => 'The info field is required.',
            'salary.required' => 'The salary field is required.',
            'salary.integer' => 'The salary field must be an integer.',
            'level.required' => 'The level field is required.'
        ];
    }
}
