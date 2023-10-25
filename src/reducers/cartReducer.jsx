const initialState = {
    cart: [],
    itemCount: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                itemCount: state.itemCount + 1,
            };
        default:
            return state;
    }
};

export default cartReducer;