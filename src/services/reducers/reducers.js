import { Add_To_Cart } from "../constant";

const initialState = {
  cartData: [],
};

function cartItems(state = initialState, actions) {
  switch (actions.type) {
    case Add_To_Cart:
      return {
        ...state,
        cartData: actions.data,
      };

    default:
      return state;
  }
}

export default cartItems;
