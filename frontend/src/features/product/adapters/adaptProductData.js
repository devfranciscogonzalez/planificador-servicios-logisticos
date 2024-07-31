import { formatDate } from "../../../utils/dateUtil"; //

export const adaptProductData = (product) => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    status: product.status,
    logo: product.logo,
    productTypeId: product.product_type_id,
    businessId: product.business_id,
    createdAt: formatDate(product.created_at),
    updatedAt: formatDate(product.updated_at),
    businessName: product.business.name,
    user: {
      id: product.user.id,
      name: product.user.name,
      email: product.user.email,
      roleId: product.user.role_id,
    },
  };
};
