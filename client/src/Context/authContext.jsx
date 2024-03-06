import { useReducer, createContext, useContext } from "react";

const authContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { userDetails: action.payload };
    case "LOGOUT":
      return { userDetails: null };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { userDetails: null });

  console.log("current User this : ", state);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw Error("AuthContext work inside the authcontextprovider");
  }

  return context;
};
