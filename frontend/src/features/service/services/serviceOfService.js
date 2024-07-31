import makeRequest from "../../../services/api/makeRequest";

export const serviceOfService = {
  addService({ name, description, service_type_id, user_id }) {
    return makeRequest("post", "/api/services", {
      name,
      description,
      service_type_id,
      user_id,
    });
  },

  getServices() {
    return makeRequest("get", "/api/services");
  },

  deleteService(serviceId) {
    return makeRequest("delete", `/api/services/${serviceId}`);
  },

  updateService(serviceId, data) {
    return makeRequest("put", `/api/services/${serviceId}`, data);
  },

  getServicesByType(id) {
    return makeRequest("get", `/api/services/by-type/${id}`);
  },

  addServiceType(data) {
    return makeRequest("post", "/api/services-type", {
      data,
    });
  },

  getServicesType() {
    return makeRequest("get", "/api/services-type");
  },

  deleteServiceType(serviceTypeId) {
    return makeRequest("delete", `/api/services-type/${serviceTypeId}`);
  },

  updateServiceType(serviceTypeId, data) {
    return makeRequest("post", `/api/services-type/${serviceTypeId}`, data);
  },
};
