import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <form className="flex justify-between items-start gap-12 mt-24">
      <div className="w-full max-width-[30%]">
        <p className="text-2xl font-semibold mb-12">Delivery Information</p>
        <div className="space-x-2">
          <input
            className="mb-4  w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="space-x-2">
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            ype="email"
            placeholder="Email Address"
            required
          />
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="Street"
            required
          />
        </div>
        <div className="space-x-2">
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="space-x-2">
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="Pin Code"
            required
          />
          <input
            className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          className="mb-4 w-[40%] p-2.5 rounded-md border-1 border-[#c5c5c5] outline-[#ff6347]"
          type="text"
          placeholder="Phone"
          required
        />
      </div>

      <div className="">
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p className="font-medium">Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="flex justify-between text-[#555]">
              <p className="font-medium text-base">Delivery Fee</p>
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
            onClick={() => navigate("/thankyou")}
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
