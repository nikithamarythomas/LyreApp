import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    // State to hold the token
    const [token, setToken] = useState(null);

    // Function to set the token
    const setAuthToken = (newToken) => {
        setToken(newToken);
    };

    // Context value containing only the token and its setter
    const contextValue = {
        token,
        setToken: setAuthToken,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
