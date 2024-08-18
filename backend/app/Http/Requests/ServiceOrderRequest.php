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
            'status' => 'required|boolean',
            'truck_plate' => 'nullable|string',
            'customer_service_name' => 'nullable|string',
            'container' => 'nullable|string',
            'entry' => 'nullable|date_format:H:i',
            'exit' => 'nullable|date_format:H:i',
            'date_status' => 'nullable|date_format:H:i',
            'status_end' => 'nullable|boolean',
            'rescheduled_os_id' => 'nullable|exists:service_orders,id',
            'comment' => 'nullable|string',
            'user_id' => 'required|exists:users,id',
            'reserve' => 'nullable|string',
            'supervisor_name' => 'nullable|string',
            'weight_entry' => 'nullable|numeric',
            'weight_exit' => 'nullable|numeric',
        ];
    }

    public function messages()
    {
        return [
            'date.required' => 'La fecha es requerida.',
            'date.date' => 'La fecha debe ser una fecha válida.',
            'code.required' => 'El código es requerido.',
            'code.string' => 'El código debe ser una cadena de texto.',
            'rate_id.required' => 'La tarifa es requerida.',
            'rate_id.exists' => 'La tarifa seleccionada no es válida.',
            'planning_id.required' => 'La planificación es requerida.',
            'planning_id.exists' => 'La planificación seleccionada no es válida.',
            'schedule_id.required' => 'El horario es requerido.',
            'schedule_id.exists' => 'El horario seleccionado no es válido.',
            'customer_id.required' => 'El cliente es requerido.',
            'customer_id.exists' => 'El cliente seleccionado no es válido.',
            'service_type_id.required' => 'El tipo de servicio es requerido.',
            'service_type_id.exists' => 'El tipo de servicio seleccionado no es válido.',
            'service_id.required' => 'El servicio es requerido.',
            'service_id.exists' => 'El servicio seleccionado no es válido.',
            'product_id.required' => 'El producto es requerido.',
            'product_id.exists' => 'El producto seleccionado no es válido.',
            'business_id.required' => 'El negocio es requerido.',
            'business_id.exists' => 'El negocio seleccionado no es válido.',
            'route_id.required' => 'La ruta es requerida.',
            'route_id.exists' => 'La ruta seleccionada no es válida.',
            'status.required' => 'El estado es requerido.',
            'status.boolean' => 'El estado debe ser un valor booleano.',
            'truck_plate.string' => 'La placa del camión debe ser una cadena de texto.',
            'customer_service_name.string' => 'El nombre del cliente debe ser una cadena de texto.',
            'container.string' => 'El contenedor debe ser una cadena de texto.',
            'entry.date_format' => 'La hora de entrada debe ser una hora válida.',
            'exit.date_format' => 'La hora de salida debe ser una hora válida.',
            'date_status.date_format' => 'La hora de estado debe ser una hora válida.',
            'status_end.boolean' => 'El estado final debe ser un valor booleano.',
            'rescheduled_os_id.exists' => 'La orden de servicio reprogramada seleccionada no es válida.',
            'comment.string' => 'El comentario debe ser una cadena de texto.',
            'user_id.required' => 'El usuario es requerido.',
            'user_id.exists' => 'El usuario seleccionado no es válido.',
            'reserve.string' => 'La reserva debe ser una cadena de texto.',
            'supervisor_name.string' => 'El nombre del supervisor debe ser una cadena de texto.',
            'weight_entry.numeric' => 'El peso de entrada debe ser un valor numérico.',
            'weight_exit.numeric' => 'El peso de salida debe ser un valor numérico.',
            'weight_entry.required' => 'El peso de entrada es requerido.',
            'weight_exit.required' => 'El peso de salida es requerido.',
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
