import React, { useContext, createContext, useReducer } from 'react';

//Set up the data layer for common data store
export const StateContext = createContext({});

//Build a Provider to wrap our entire app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);