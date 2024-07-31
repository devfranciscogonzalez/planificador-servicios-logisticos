import makeRequest from "../../../services/api/makeRequest";

export const productService = {
  addProduct({ name, description, status, logo, business_id, user_id }) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("status", status ? 1 : 0);
    formData.append("logo", logo);
    formData.append("business_id", business_id);
    formData.append("user_id", user_id);

    return makeRequest("post", "/api/products", formData);
  },

  getProducts() {
    return makeRequest("get", "/api/products");
  },

  deleteProduct(productId) {
    return makeRequest("delete", `/api/products/${productId}`);
  },

  updateProduct(
    productId,
    { name, description, status, logo, business_id, user_id }
  ) {
    const formDataUpdate = new FormData();
    formDataUpdate.append("name", name);
    formDataUpdate.append("description", description);
    formDataUpdate.append("status", status ? 1 : 0);
    formDataUpdate.append("logo", logo);
    formDataUpdate.append("business_id", business_id);
    formDataUpdate.append("user_id", user_id);
    formDataUpdate.append("_method", "PUT");
    return makeRequest("post", `/api/products/${productId}`, formDataUpdate);
  },

  getBusinesses() {
    return makeRequest("get", "/api/businesses");
  },
  getActiveProducts() {
    return makeRequest("get", "/api/products/active");
  },
};
