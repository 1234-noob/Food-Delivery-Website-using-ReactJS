import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const Navbar = ({ setShowPopUp }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className=" py-[20px] flex justify-between items-center">
      <Link to={"/"}>
        {" "}
        <img className="w-36" src={assets.logo} alt="" />
      </Link>
      <ul className="flex list-none gap-5 text-[#49557e] text-lg">
        <Link
          to={"/"}
          className={`${
            menu === "Home" ? "pb-0.5 border-b-[#49557e] border-b-2" : ""
          } cursor-pointer`}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={`${
            menu === "Menu" ? "pb-0.5 border-b-[#49557e] border-b-2" : ""
          } cursor-pointer`}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={`${
            menu === "Mobile-app" ? "pb-0.5 border-b-[#49557e] border-b-2" : ""
          } cursor-pointer`}
          onClick={() => setMenu("Mobile-app")}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          className={`${
            menu === "Contact Us" ? "pb-0.5 border-b-[#49557e] border-b-2" : ""
          } cursor-pointer`}
          onClick={() => setMenu("Contact Us")}
        >
          Contact Us
        </a>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ""
                : "absolute  min-w-2 min-h-2 bg-[#ff6347] rounded-full -top-2 -right-2"
            }`}
          ></div>
        </div>
        <button
          className="bg-transparent text-base text-[#49557e] border-1 border-[#ff6347] px-8 py-3 rounded-4xl cursor-pointer hover:bg-[#fff4f2] duration-300"
          onClick={() => setShowPopUp(true)}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
