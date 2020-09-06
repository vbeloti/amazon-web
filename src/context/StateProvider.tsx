import React, { createContext, useReducer } from "react";

export const initialState: IInitialState = {
  basket: {},
};

interface IInitialState {
  basket: object;
}

interface IStateProvider {
  dispatch: React.Dispatch<any>;
  state: IInitialState;
}

export const StateContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
  });

export const StateProvider: React.FC<IStateProvider> = ({
  dispatch,
  state,
  children,
}) => {
  return (
    <StateContext.Provider value={useReducer(state, dispatch)}>
      {children}
    </StateContext.Provider>
  );
};
