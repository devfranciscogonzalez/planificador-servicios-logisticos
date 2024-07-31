import makeRequest from "../../../services/api/makeRequest";

export const orderService = {
  addOrder({
    date,
    code,
    rate_id,
    planning_id,
    schedule_id,
    customer_id,
    service_type_id,
    service_id,
    product_id,
    business_id,
    route_id,
    container,
    truck_plate,
    entry,
    exit,
    status,
    status_end,
    status_date,
    comment,
    user_id,
  }) {
    return makeRequest("post", "/api/orders", {
      date,
      code,
      rate_id,
      planning_id,
      schedule_id,
      customer_id,
      service_type_id,
      service_id,
      product_id,
      business_id,
      route_id,
      container,
      truck_plate,
      entry,
      exit,
      status,
      status_end,
      status_date,
      comment,
      user_id,
    });
  },
  getOrders() {
    return makeRequest("get", "/api/orders");
  },

  deleteOrder(orderId) {
    return makeRequest("delete", `/api/orders/${orderId}`);
  },

  updateOrder(orderId, data) {
    return makeRequest("put", `/api/orders/${orderId}`, data);
  },

  updateDate(orderId, data) {
    return makeRequest("put", `/api/orders/updateDate/${orderId}`, data);
  },
  getSchedule() {
    return makeRequest("get", "/api/schedule");
  },

  getPlanning() {
    return makeRequest("get", "/api/planning");
  },
  updateEntryDate(orderId) {
    return makeRequest("put", `/api/orders/updateEntryDate/${orderId}`);
  },
  updateExitDate(orderId) {
    return makeRequest("put", `/api/orders/updateExitDate/${orderId}`);
  },
  updateStatus(orderId, data) {
    return makeRequest("put", `/api/orders/updateStatus/${orderId}`, data);
  },
  updateStatusEnd(orderId) {
    return makeRequest("put", `/api/orders/updateStatusEnd/${orderId}`);
  },
  addTruckPlate(orderId, data) {
    return makeRequest("put", `/api/orders/addTruckPlate/${orderId}`, data);
  },
  addWeightEntry(orderId, data) {
    return makeRequest("put", `/api/orders/addWeightEntry/${orderId}`, data);
  },
  addWeightExit(orderId, data) {
    return makeRequest("put", `/api/orders/addWeightExit/${orderId}`, data);
  },
};
