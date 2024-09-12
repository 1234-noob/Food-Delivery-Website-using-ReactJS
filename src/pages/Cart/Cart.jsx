import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="mt-24">
      <div>
        <div className="grid grid-cols-6 items-center text-gray-600 text-[1vw]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] border-none bg-[#e2e2e2]" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return <CartItems key={index} item={item} />;
          }
        })}
        <div className="mt-20 flex justify-between gap-[12vw]">
          <div className="flex-1 flex flex-col gap-5">
            <h2>Cart Total</h2>
            <div>
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                {getTotalCartAmount() > 0 ? <p>5</p> : <p>0</p>}
              </div>
              <hr className="my-2.5" />
              <div className="flex justify-between text-[#555]">
                <b>Total</b>
                <b>
                  {getTotalCartAmount() > 0
                    ? getTotalCartAmount() + 5
                    : getTotalCartAmount()}
                </b>
              </div>
            </div>
            <button
              className="border-none text-white bg-[#ff6347] w-[20vw] py-3 rounded-md cursor-pointer"
              onClick={() => navigate("/order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="flex-1">
            <div>
              <p className="text-[#555]">
                If you have a promo code, Enter it here{" "}
              </p>
              <div className="mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm">
                <input
                  className="outline-none bg-transparent border-none pl-2.5"
                  type="text"
                  placeholder="Promo Code"
                />
                <button className="w-[10vw] py-3 px-1 bg-black border-none text-white rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
