import makeRequest from "../../../services/api/makeRequest";

export const authService = {
  async login(credentials) {
    await makeRequest("get", "/sanctum/csrf-cookie");
    return makeRequest("post", "/api/login", credentials);
  },
  validateToken() {
    return makeRequest("get", "/api/user");
  },
  logout() {
    return makeRequest("post", "/api/logout");
  },
};
