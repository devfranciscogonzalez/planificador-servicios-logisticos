import httpClient from "./httpClient";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

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
      headers: data instanceof FormData ? {} : DEFAULT_HEADERS,
      data,
    };
    const response = await httpClient(config);
    return response.data;
    
  } catch (error) {
    const errorMessage = handleError(error);

    if (errorMessage && typeof errorMessage === "object") {
      throw new Error(errorMessage.message || "Error desconocido");
    } else {
      throw new Error(errorMessage);
    }
  }
}

export default makeRequest;
