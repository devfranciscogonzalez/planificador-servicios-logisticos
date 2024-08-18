<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class ProductRequest extends FormRequest
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
            'name' => 'required|string|min:3|max:50',
            'description' => 'required|string|min:10|max:500',
            'status' => 'required|boolean',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'business_id' => 'required|exists:businesses,id',
            'user_id' => 'required|exists:users,id',
        ];
    }

    public function messages()
    {
        return [

            'name.required' => 'El campo nombre es obligatorio.',
            'name.string' => 'El campo nombre debe ser una cadena de texto.',
            'name.min' => 'El campo nombre debe tener al menos 3 caracteres.',
            'name.max' => 'El campo nombre debe tener como máximo 50 caracteres.',
            'description.required' => 'El campo descripción es obligatorio.',
            'description.min' => 'El campo descripción debe tener al menos 10 caracteres.',
            'description.max' => 'El campo descripción debe tener como máximo 500 caracteres.',
            'status.required' => 'El campo estado es obligatorio.',
            'status.boolean' => 'El campo estado debe ser un valor booleano.',
            'logo.image' => 'El campo logo debe ser una imagen.',
            'logo.mimes' => 'El campo logo debe ser un archivo de tipo: jpeg, png, jpg.',
            'logo.max' => 'El campo logo debe tener un tamaño máximo de 2MB.',
            'business_id.required' => 'El campo negocio es obligatorio.',
            'business_id.exists' => 'El negocio seleccionado no es válido.',
            'user_id.required' => 'El campo usuario es obligatorio.',
            'user_id.exists' => 'El usuario seleccionado no es válido.',
        ];
    }

    protected function failedValidation(Validator $validator)
    {

        $response = response()->json([
            'message' => 'Los datos proporcionados no son válidos.',
            'errors' => $validator->errors()->first(),
        ],  Response::HTTP_UNPROCESSABLE_ENTITY);

        throw new ValidationException($validator, $response);
    }
}
