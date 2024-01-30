import { Add_To_Cart } from "../constant";
const addToCart = (data) => {
  return {
    type: Add_To_Cart,
    dta: data,
  };
};

export default addToCart;
