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
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'status' => 'required|boolean|in:0,1',
            'logo' => 'nullable',
            'business_id' => 'required|numeric',
            'user_id' => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [

            'name.required' => 'El campo nombre es obligatorio.',
            'description.required' => 'El campo descripción es obligatorio.',
            'status.required' => 'El campo estado es obligatorio.',
            'user_id.required' => 'El campo usuario es obligatorio.',
            'business_id.required' => 'El campo negocio es obligatorio.',
            'business_id.numeric' => 'El campo negocio debe ser un numero.',
            'user_id.numeric' => 'El campo usuario debe ser un numero.',
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
