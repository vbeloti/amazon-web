import React, { createContext, useReducer, useContext } from "react";

export const initialState = {
  basket: [],
  user: null,
};

export interface IInitialState {
  basket: any[];
  user: string | null;
}

export interface IAction {
  type: "ADD_TO_BASKET" | "REMOVE_FROM_BASKET" | "SET_USER";
  item: IItem[];
  id: number;
  user: object;
}

export interface IItem {
  id: number;
  image: string;
  price: number;
  rating: number;
  title: string;
}

interface IStateProvider {
  reducer: (state: IInitialState, action: IAction) => any;
  state: IInitialState;
}

export const StateContext = createContext<any>({});

export const StateProvider: React.FC<IStateProvider> = ({
  reducer,
  state,
  children,
}) => {
  return (
    <StateContext.Provider value={useReducer(reducer, state)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
