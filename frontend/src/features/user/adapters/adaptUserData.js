import { formatDate } from "../../../utils/dateUtil";

export const adaptUserData = (userData) => {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    status: userData.status,
    roleId: userData.role_id,
    createdAt: formatDate(userData.created_at),
    updatedAt: formatDate(userData.updated_at),
    roleName: userData.role ? userData.role.name : null,
  };
};
