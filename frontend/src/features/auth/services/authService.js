import makeRequest from "../../../services/api/makeRequest";
// se utiliza el shorthand method syntax

export const authService = {
  login(credentials) {
    makeRequest("get", "/sanctum/csrf-cookie");
    return makeRequest("post", "/api/login", credentials);
  },

  validateToken() {
    return makeRequest("get", "/api/user");
  },

  logout() {
    return makeRequest("post", "/api/logout");
  },
};
