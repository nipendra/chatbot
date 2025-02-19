import React, { createContext, useState } from 'react';

export const dataContext = createContext();

function UserContext({ children }) {
    const [startRes, setStartRes] = useState(false);
    const [popUp, setPopUp] = useState(false);

    let value = {
        startRes, setStartRes,
        popUp, setPopUp,
    };
    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    );
}

export default UserContext;