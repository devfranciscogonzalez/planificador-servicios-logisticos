<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;


class RateRequest extends FormRequest
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
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'status' => 'required|boolean',
            'price' => 'required|numeric',
            'currency' => 'required|string|max:3',
            'user_id' => 'required|exists:users,id'
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
            'start_date.required' => 'La fecha de inicio es obligatoria.',
            'start_date.date' => 'La fecha de inicio no tiene un formato de fecha válido.',
            'end_date.required' => 'La fecha de fin es obligatoria.',
            'end_date.date' => 'La fecha de fin no tiene un formato de fecha válido.',
            'end_date.after_or_equal' => 'La fecha de fin debe ser posterior o igual a la fecha de inicio.',
            'status.required' => 'El campo estado es obligatorio.',
            'status.boolean' => 'El campo estado debe ser un valor booleano.',
            'status.in' => 'El campo estado debe ser 0 o 1.',
            'price.required' => 'El campo precio es obligatorio.',
            'price.numeric' => 'El campo precio debe ser un valor decimal.',
            'currency.required' => 'El campo moneda es obligatorio.',
            'currency.string' => 'El campo moneda debe ser un valor de texto.',
            'currency.max' => 'El campo moneda no debe exceder los 3 caracteres.',
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
