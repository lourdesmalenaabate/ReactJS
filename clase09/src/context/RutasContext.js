import { createContext, useState } from "react";

const RutasContext = createContext();

const RutasProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const data = {
    user,
    setUser,
  };

  return <RutasContext.Provider value={data}>{children}</RutasContext.Provider>;
};

export { RutasProvider };
export default RutasContext;
