import { IInitialState, IAction } from "./StateProvider";


function reducer(state: IInitialState, action: IAction) {
    switch (action.type) {
        case 'ADD_TO_BASKET':

            break;

        case 'REMOVE_TO_BASKET':

            break;

        default:
            return state;
    }

}

export default reducer;