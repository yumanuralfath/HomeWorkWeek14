import { Base_URL } from "@/lib/baseUrl"

export const register = async (params) => {
  try {
    const response = await fetch(`${Base_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(params),
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const login = async (params) => {
  try {
    const response = await fetch(`${Base_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(params),
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${Base_URL}/logout`, {
      method: 'POST',
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};