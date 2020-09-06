import React, { createContext, useReducer } from "react";

export const initialState: IInitialState = {
  basket: {},
};

export interface IInitialState {
  basket: object;
}

export interface IAction {
  type: 'ADD_TO_BASKET' | 'REMOVE_TO_BASKET';
}

interface IStateProvider {
  reducer: (state: IInitialState, action: IAction) => any;
  state: any;
}

export const StateContext = createContext<any>(initialState);

export const StateProvider: React.FC<IStateProvider> = ({
  reducer,
  state,
  children,
}) => {
  return (
    <StateContext.Provider value={useReducer(state, reducer)}>
      {children}
    </StateContext.Provider>
  );
};
