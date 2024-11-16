import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("/user/login", { email, password });

    // Verify response is successful
    if (res.status === 200 && res.data) {
      return res.data;
    } else {
      throw new Error("Login response not successful");
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Login API error response:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Login failed due to server error");
    } else {
      console.error("Unexpected login error:", error);
      throw new Error("An unexpected error occurred during login");
    }
  }
};

export const checkAuthStatus = async () => {
  try {
    const res = await axios.get("/user/auth-status");
    
    if (res.status === 200 && res.data) {
      return res.data; 
    } else {
      console.error("Unexpected status code:", res.status);
      throw new Error("Unable to authenticate. Please log in again.");
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("API error response:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Authentication failed. Please log in again.");
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred while checking authentication status");
    }
  }
};
