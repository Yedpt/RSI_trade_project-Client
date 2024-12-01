import axios from "axios";

const PORT = 8000;
const URL = `http://localhost:${PORT}/api/users`;

// SERVICIO SIGNUP
export const signUpNewUser = async (data) => {
  try {
    // Add created_at and default role
    const signupData = {
      ...data,
      created_at: new Date().toISOString(),
      rol: "client",
    };

    const response = await axios.post(`${URL}/signup`, signupData, {
      headers: { "Content-Type": "application/json" },
    });

    // Attempt to login immediately after successful signup
    const loginResponse = await axios.post(
      `${URL}/login`,
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const userData = loginResponse.data.sessionData;

    // Store authentication token and user data
    if (userData.token) {
      localStorage.setItem("authToken", userData.token);
      localStorage.setItem("user", JSON.stringify(userData.user));
    }

    return {
      success: true,
      userData,
      message: "Usuario registrado exitosamente",
    };
  } catch (error) {
    let errorMessage;

    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage =
            "Los datos ingresados no son válidos. Por favor, revisa el formulario.";
          break;
        case 409:
          errorMessage =
            "Este correo o nombre de usuario ya está registrado. Intenta iniciar sesión.";
          break;
        default:
          errorMessage =
            "Ocurrió un problema al registrarse. Inténtalo nuevamente.";
      }
    } else if (error.request) {
      errorMessage =
        "No se pudo conectar con el servidor. Verifica tu conexión a Internet.";
    } else {
      errorMessage = "Ocurrió un error inesperado. Inténtalo más tarde.";
    }

    console.error("Error al registrarse:", error);
    return {
      success: false,
      message: errorMessage,
    };
  }
};

// SERVICIO LOGIN
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data, {
      headers: { "Content-Type": "application/json" },
    });

    const userData = response.data.sessionData;

    // Store authentication token and user data
    if (userData.token) {
      localStorage.setItem("authToken", userData.token);
      localStorage.setItem("user", JSON.stringify(userData.user));
    }

    return {
      success: true,
      userData,
      message: "Inicio de sesión exitoso",
    };
  } catch (error) {
    let errorMessage;

    if (error.response) {
      switch (error.response.status) {
        case 404:
          errorMessage = "Ups... Parece que no estás registrado.";
          break;
        case 401:
          errorMessage = "Contraseña incorrecta.";
          break;
        default:
          errorMessage =
            "Ocurrió un error en el servidor. Inténtalo nuevamente.";
      }
    } else if (error.request) {
      errorMessage =
        "No se pudo conectar con el servidor. Verifica tu conexión.";
    } else {
      errorMessage = "Ocurrió un error inesperado. Inténtalo más tarde.";
    }

    console.error("Error al iniciar sesión:", error);
    return {
      success: false,
      message: errorMessage,
    };
  }
};
