import modalType from '../action/modals.action';



function modalReducer(state = { isOpen: false }, action) {

    switch (action.type) {
        case modalType.OPEN_EDIT_MODAL:
            return {
                ...state,
                isOpen: true,
                id: action.payload.id
            };
        case modalType.CLOSE_EDIT_MODAL:
            return {
                ...state,
                isOpen: false,
                id: null
            };
        default:
            return state;
    }
}

export default modalReducer;