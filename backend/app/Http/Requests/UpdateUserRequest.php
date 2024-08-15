<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class UpdateUserRequest extends FormRequest
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
        $userId = $this->route('id');
        return [
            'name' => 'required|string|min:3|max:50',
            'email' => 'required|string|email|min:8|max:50|unique:users,email,' . $userId,
            'status' => 'required|boolean',
            'role_id' => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'El campo nombre es obligatorio.',
            'name.string' => 'El campo nombre debe ser una cadena de texto.',
            'name.min' => 'El campo nombre debe tener al menos 3 caracteres.',
            'name.max' => 'El campo nombre debe tener como máximo 50 caracteres.',
            'email.required' => 'El campo email es obligatorio.',
            'email.string' => 'El campo email debe ser una cadena de texto.',
            'email.email' => 'El campo email debe ser una dirección de correo válida.',
            'email.min' => 'El campo email debe tener al menos 8 caracteres.',
            'email.max' => 'El campo email debe tener como máximo 50 caracteres.',
            'email.unique' => 'El email ya está registrado.',
            'status.required' => 'El campo estado es obligatorio.',
            'status.boolean' => 'El campo estado debe ser un valor booleano.',
            'role_id.required' => 'El campo rol es obligatorio.',
            'role_id.numeric' => 'El campo rol debe ser un número.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $response = response()->json([
            'message' => 'Los datos proporcionados no son válidos.',
            'errors' => $validator->errors(),
        ], 422);

        throw new ValidationException($validator, $response);
    }
}
