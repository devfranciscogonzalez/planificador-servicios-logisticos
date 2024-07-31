import makeRequest from "../../../services/api/makeRequest";

export const userService = {
  register({ name, email, status, password, password_confirmation, role_id }) {
    status = status ? 1 : 0;
    return makeRequest("post", "/api/register", {
      name,
      email,
      status,
      password,
      password_confirmation,
      role_id,
    });
  },

  getRoles() {
    return makeRequest("get", "/api/roles");
  },

  getUsers() {
    return makeRequest("get", "/api/users");
  },
  deleteUser(userId) {
    return makeRequest("delete", `/api/user/${userId}`);
  },
  updateUser(userId, { name, email, status, role_id }) {
    status = status ? 1 : 0;
    return makeRequest("put", `/api/user/${userId}`, {
      name,
      email,
      status,
      role_id,
    });
  },
  updateUserPassword(userId, data) {
    return makeRequest("put", `/api/user/${userId}/change-password`, data);
  },
};
