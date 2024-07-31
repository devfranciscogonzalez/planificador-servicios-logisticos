import makeRequest from "../../../services/api/makeRequest";

export const rateService = {
  addRate({
    customer_id,
    service_type_id,
    service_id,
    product_id,
    business_id,
    route_id,
    status,
    start_date,
    end_date,
    price,
    currency,
    user_id,
  }) {
    return makeRequest("post", "/api/rates", {
      customer_id,
      service_type_id,
      service_id,
      product_id,
      business_id,
      route_id,
      start_date,
      end_date,
      status,
      price,
      currency,
      user_id,
    });
  },
  getRates() {
    return makeRequest("get", "/api/rates");
  },

  deleteRate(rateId) {
    return makeRequest("delete", `/api/rates/${rateId}`);
  },

  updateStatus(rateId) {
    return makeRequest("put", `/api/rates/updateStatus/${rateId}`);
  },

  getRoutes() {
    return makeRequest("get", "/api/routes");
  },

  getByCode(code) {
    return makeRequest("get", `/api/rates/getByCode/${code}`);
  },

  getByAttributes({
    customer_id,
    service_type_id,
    service_id,
    product_id,
    business_id,
    route_id,
  }) {
    return makeRequest("post", "/api/rates/getByAttributes", {
      customer_id,
      service_type_id,
      service_id,
      product_id,
      business_id,
      route_id,
    });
  },
};
