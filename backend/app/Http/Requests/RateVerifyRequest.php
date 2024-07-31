<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;


class RateVerifyRequest extends FormRequest
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
            'customer_id' => 'required|exists:customers,id',
            'service_id' => 'required|exists:services,id',
            'service_type_id' => 'required|exists:service_types,id',
            'product_id' => 'required|exists:products,id',
            'business_id' => 'required|exists:businesses,id',
            'route_id' => 'required|exists:routes,id',
        ];
    }
    public function messages()
    {
        return [
            'customer_id.required' => 'El campo cliente es obligatorio.',
            'customer_id.exists' => 'El cliente seleccionado no es válido.',
            'service_id.required' => 'El campo servicio es obligatorio.',
            'service_id.exists' => 'El servicio seleccionado no es válido.',
            'service_type_id.required' => 'El campo tipo de servicio es obligatorio.',
            'service_type_id.exists' => 'El tipo de servicio seleccionado no es válido.',
            'product_id.required' => 'El campo producto es obligatorio.',
            'product_id.exists' => 'El producto seleccionado no es válido.',
            'business_id.required' => 'El campo negocio es obligatorio.',
            'business_id.exists' => 'El negocio seleccionado no es válido.',
            'route_id.required' => 'El campo ruta es obligatorio.',
            'route_id.exists' => 'La ruta seleccionada no es válida.',

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
