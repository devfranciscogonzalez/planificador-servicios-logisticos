<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
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
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:4',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'El campo email es obligatorio para iniciar sesión.',
            'email.email' => 'Proporciona una dirección de correo válida para iniciar sesión.',
            'password.required' => 'Debes proporcionar una contraseña para iniciar sesión.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->getMessages();
        $response = response()->json([
            'message' => 'Los datos proporcionados no son válidos.',
            'errors' => $errors,
        ], Response::HTTP_UNPROCESSABLE_ENTITY);

        throw new ValidationException($validator, $response);
    }
}
