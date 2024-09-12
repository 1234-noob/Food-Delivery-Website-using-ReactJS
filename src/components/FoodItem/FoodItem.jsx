import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../Context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  return (
    <div className="food-items w-full m-auto rounded-2xl shadow-[#00000015] shadow-lg duration-300 ">
      <div className="relative">
        <img className="w-full rounded-t-2xl" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-[50%]"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white">
            <img
              className="w-8"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-8"
              src={assets.add_icon_green}
              alt=""
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2.5">
          <p className="text-lg font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-xs">{description}</p>
        <p className="text-[#ff6347] text-xl font-medium my-2.5">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
