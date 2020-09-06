import { IInitialState, IAction } from "./StateProvider";


const reducer = (state: IInitialState, action: IAction) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':

            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Não é possível remover esse produto (id: ${action.id})`);
            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }

}

export default reducer;