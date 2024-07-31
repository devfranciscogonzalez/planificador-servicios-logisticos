<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class ServiceOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function rules()
    {
        return [
            'date' => 'required|date',
            'code' => 'required|string',
            'rate_id' => 'required|exists:rates,id',
            'planning_id' => 'required|exists:plannings,id',
            'schedule_id' => 'required|exists:schedules,id',
            'customer_id' => 'required|exists:customers,id',
            'service_type_id' => 'required|exists:service_types,id',
            'service_id' => 'required|exists:services,id',
            'product_id' => 'required|exists:products,id',
            'business_id' => 'required|exists:businesses,id',
            'route_id' => 'required|exists:routes,id',
            'container' => 'nullable|string',
            'truck_plate' => 'nullable|string',
            'entry' => 'nullable|date_format:H:i',
            'exit' => 'nullable|date_format:H:i',
            'date_status' => 'nullable|date_format:H:i',
            'status' => 'nullable|boolean',
            'status_end' => 'nullable|boolean',
            'rescheduled_os_id' => 'nullable|exists:service_orders,id',
            'comment' => 'nullable|string',
            'user_id' => 'required|exists:users,id',
            'reserve' => 'nullable|string',
            'customer_service_name' => 'nullable|string',
            'supervisor_name' => 'nullable|string',
            'weight_entry' => 'nullable|numeric',
            'weight_exit' => 'nullable|numeric',
            'rescheduled_os_id' => 'nullable|exists:service_orders,id',
        ];
    }

    public function messages()
    {
        return [];
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
