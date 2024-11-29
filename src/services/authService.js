import axios from "axios";

const PORT = 8000;
const URL = `http://localhost:${PORT}/api/users`;

//SERVICIO SIGNUP

export const signUpNewUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return { success: true, data: response.data };
  } catch (error) {
    let errorMessage;

    if (error.response) {
      if (error.response.status === 400) {
        errorMessage =
          "Los datos ingresados no son válidos. Por favor, revisa el formulario.";
      } else if (error.response.status === 409) {
        errorMessage =
          "Este usuario ya está registrado. Intenta iniciar sesión.";
      } else {
        errorMessage =
          "Ocurrió un problema al registrarse. Inténtalo nuevamente.";
      }
    } else if (error.request) {
      // Errores de red
      errorMessage =
        "No se pudo conectar con el servidor. Verifica tu conexión a Internet.";
    } else {
      errorMessage = "Ocurrió un error inesperado. Inténtalo más tarde.";
    }

    console.error("Error al registrarse:", errorMessage);
    return { success: false, message: errorMessage };
  }
};

//SERVICIO LOGIN

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data, {
      headers: { "Content-Type": "application/json" },
    });

    const userData = response.data.sessionData;

    if (userData.token) {
      localStorage.setItem("authToken", userData.token);
    }

    return { success: true, userData };
  } catch (error) {
    let errorMessage;

    if (error.response) {
      if (error.response.status === 404) {
        errorMessage = "Ups... Parece que no estás registrado.";
      } else if (error.response.status === 401) {
        errorMessage = "Contraseña incorrecta.";
      } else {
        errorMessage = "Ocurrió un error en el servidor. Inténtalo nuevamente.";
      }
    } else if (error.request) {
      errorMessage =
        "No se pudo conectar con el servidor. Verifica tu conexión.";
    } else {
      errorMessage = "Ocurrió un error inesperado. Inténtalo más tarde.";
    }

    return { success: false, message: errorMessage };
  }
};
