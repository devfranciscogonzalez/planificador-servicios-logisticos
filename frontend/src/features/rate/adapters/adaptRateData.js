import { formatDate } from "../../../utils/dateUtil";
import { formatPrice } from "../../../utils/formatPrice";

export const adaptRateData = (rate) => {
  return {
    id: rate.id,
    code: rate.code,
    customerId: rate.customer_id,
    serviceTypeId: rate.service_type_id,
    productId: rate.product_id,
    routeId: rate.route_id,
    status: rate.status,
    price: formatPrice(rate.price),
    currency: rate.currency,
    createdAt: formatDate(rate.created_at),
    updatedAt: formatDate(rate.updated_at),
    user_id: rate.user_id,
    customerName: rate.customer.name,
    serviceName: rate.service.name,
    serviceTypeName: rate.service_type.name,
    productName: rate.product.name,
    routeName: rate.route.name,
    userName: rate.user.name,
    userRole: rate.user.role.name,
    roleId: rate.user.role.id,
  };
};
