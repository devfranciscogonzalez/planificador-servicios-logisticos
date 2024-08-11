import httpClient from "./httpClient";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function getHeaders(data) {
  const headers = { ...DEFAULT_HEADERS };
  headers["X-XSRF-TOKEN"] = getCookie("XSRF-TOKEN");
  return data instanceof FormData ? {} : headers;
}

function handleError(error) {
  if (error.response) {
    return error.response.data;
  } else if (error.request) {
    return "No se recibió respuesta del servidor";
  }
  return "Error al realizar la solicitud";
}

async function makeRequest(method, url, data = null) {
  try {
    const config = {
      method,
      url,
      headers: getHeaders(data),
      data,
    };

    const response = await httpClient(config);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);

    if (errorMessage && typeof errorMessage === "object") {
      errorMessage.errors && console.error("Errors:", errorMessage.errors);
      errorMessage.message && console.error("Message:", errorMessage.message);
    } else {
      console.error("Error:", errorMessage);
    }

    throw errorMessage;
  }
}

export default makeRequest;
