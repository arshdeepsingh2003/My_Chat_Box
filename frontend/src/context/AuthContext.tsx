import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../helpers/api-communicator";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Create AuthContext
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for an existing authenticated user session, if any
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await loginUser(email, password);
      if (data && data.email && data.name) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      } else {
        throw new Error("Invalid login data returned from server");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error; // Rethrow to handle error in Login component
    }
  };
  
  const signup = async (name: string,email: string, password: string) => {}
  const logout = async () => {
    
  };

  const value: UserAuth = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use AuthContext
export const useAuth = (): UserAuth => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
