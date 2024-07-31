import { formatDate } from "../../../utils/dateUtil"; //

export const adaptCustomerData = (customer) => {
  return {
    id: customer.id,
    name: customer.name,
    description: customer.description,
    status: customer.status,
    logo: customer.logo,
    userId: customer.user_id,
    createdAt: formatDate(customer.created_at),
    updatedAt: formatDate(customer.updated_at),
    user: {
      id: customer.user.id,
      name: customer.user.name,
      email: customer.user.email,
      roleId: customer.user.role_id,
    },
  };
};
