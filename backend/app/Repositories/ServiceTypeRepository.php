<?php

namespace App\Repositories;

use App\Interfaces\ServiceTypeRepositoryInterface;
use App\Models\Service;
use App\Models\ServiceType;

class ServiceTypeRepository implements ServiceTypeRepositoryInterface
{
    // /**
    //  * Crea un nuevo tipo de servicio.
    //  *
    //  * @param array $data
    //  * @return ServiceType
    //  */
    // public function create(array $data)
    // {
    //     $serviceType = ServiceType::create($data);
    //     return $serviceType;
    // }

    // /**
    //  * Obtiene un tipo de servicio por su ID.
    //  *
    //  * @param int $id
    //  * @return ServiceType
    //  */
    // public function getById($id)
    // {
    //     return ServiceType::findOrFail($id);
    // }

    // /**
    //  * Actualiza un tipo de servicio.
    //  *
    //  * @param int $id
    //  * @param array $data
    //  * @return ServiceType
    //  */
    // public function update($id, array $data)
    // {
    //     $serviceType = ServiceType::findOrFail($id);
    //     $serviceType->update($data);
    //     return $serviceType;
    // }

    // /**
    //  * Elimina un tipo de servicio.
    //  *
    //  * @param int $id
    //  * @return ServiceType
    //  */
    // public function delete($id)
    // {
    //     $serviceType = ServiceType::findOrFail($id);
    //     $serviceType->delete();
    //     return $serviceType;
    // }

    /**
     * Obtiene todos los tipos de servicio.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAll()
    {
        return ServiceType::all();
    }
}
