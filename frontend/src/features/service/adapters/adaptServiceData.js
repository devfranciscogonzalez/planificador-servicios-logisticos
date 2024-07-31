import { formatDate } from "../../../utils/dateUtil"; //

export const adaptServiceData = (service) => {
  return {
    id: service.id,
    name: service.name,
    description: service.description,
    serviceTypeId: service.service_type_id,
    createdAt: formatDate(service.created_at),
    updatedAt: formatDate(service.updated_at),
    serviceTypeName: service.service_type.name,
    user: {
      id: service.user.id,
      name: service.user.name,
      email: service.user.email,
      roleId: service.user.role_id,
    },
  };
};
