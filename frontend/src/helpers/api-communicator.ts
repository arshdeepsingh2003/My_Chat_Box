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
    const res = await axios.get("user/auth-status"); // Ensure this path is correct
    if(res.status !==200){
      throw new Error("Unable to authenticate")
    }
    const data=await res.data;
    return data;
};