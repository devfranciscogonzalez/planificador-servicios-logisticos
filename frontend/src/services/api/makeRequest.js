import httpClient from "./httpClient";
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function makeRequest(method, url, data = null) {
  try {
    const config = {
      method: method,
      url: url,
      headers: data instanceof FormData ? {} : DEFAULT_HEADERS,
      data: data,
    };

    const response = await httpClient(config);
    return response.data;
  } catch (error) {
    let errorMessage;

    if (error.response) {
      errorMessage = error.response.data;
    } else if (error.request) {
      errorMessage = "No se recibió respuesta del servidor";
    } else {
      errorMessage = "Error al realizar la solicitud";
    }

    if (errorMessage !== null) {
      errorMessage?.errors && console.log("errors: " + errorMessage?.errors);
      errorMessage?.message && console.log("mesaje: " + errorMessage?.message);
    } else {
      console.log(error);
    }

    throw errorMessage;
  }
}
export default makeRequest;
