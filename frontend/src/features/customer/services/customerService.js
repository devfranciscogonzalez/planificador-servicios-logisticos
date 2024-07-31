import makeRequest from "../../../services/api/makeRequest";

export const customerService = {
  addCustomer({ name, description, status, logo, user_id }) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("status", status ? 1 : 0);
    formData.append("logo", logo);
    formData.append("user_id", user_id);

    return makeRequest("post", "/api/customers", formData);
  },

  getCustomers() {
    return makeRequest("get", "/api/customers");
  },

  deleteCustomer(customerId) {
    return makeRequest("delete", `/api/customers/${customerId}`);
  },

  updateCustomer(customerToEdit, { name, description, status, logo, user_id }) {
    const formDataUpdate = new FormData();
    formDataUpdate.append("name", name);
    formDataUpdate.append("description", description);
    formDataUpdate.append("status", status ? 1 : 0);
    formDataUpdate.append("logo", logo);
    formDataUpdate.append("user_id", user_id);
    formDataUpdate.append("_method", "PUT");
    return makeRequest(
      "post",
      `/api/customers/${customerToEdit}`,
      formDataUpdate
    );
  },
  getActiveCustomers() {
    return makeRequest("get", "/api/customers/active");
  },
};
