import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const CartItems = ({ item }) => {
  const { cartItems, removeFromCart } = useContext(StoreContext);
  return (
    <>
      <div className="grid grid-cols-6 items-center text-[1vw] my-2.5 text-black ">
        <img className="w-12 " src={item.image} alt="" />
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{cartItems[item._id]}</p>
        <p>${item.price * cartItems[item._id]}</p>
        <p className="cursor-pointer" onClick={() => removeFromCart(item._id)}>
          x
        </p>
      </div>
      <hr className="h-[1px] border-none bg-[#e2e2e2]" />
    </>
  );
};

export default CartItems;
