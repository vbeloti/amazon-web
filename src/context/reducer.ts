import { IInitialState, IAction } from "./StateProvider";


const reducer = (state: IInitialState, action: IAction) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'ADD_TO_BASKET':

            return { ...state,
                basket: [...state.basket, action.item]
             };

        case 'REMOVE_TO_BASKET':

            return { state };

        default:
            return state;
    }

}

export default reducer;