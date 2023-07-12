import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  const handleAuth = () => {
    if (auth) setAuth(initialAuth);
    else setAuth(true);
  };
  const data = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
