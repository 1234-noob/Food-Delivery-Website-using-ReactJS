import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore-menu" className="flex flex-col gap-5">
      <h1 className="text-[#262626] font-medium text-2xl ">Explore our menu</h1>
      <p className="max-w-[60%] text-[#808080] text-lg">
        Choose from a diverse menu featuring a delectable array of dishes.Our
        mission is to satisfy and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div className="items-container flex justify-between items-center gap-8 text-center my-5 overflow-scroll">
        {menu_list.map((items, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCategory((prev) =>
                  prev === items.menu_name ? "All" : items.menu_name
                );
              }}
            >
              <img
                className={`${
                  category === items.menu_name
                    ? "border-4 border-[#ff6347] p-0.5"
                    : ""
                } w-[7.5vw] min-w-20 cursor-pointer rounded-full duration-300`}
                src={items.menu_image}
                alt=""
              />
              <p className="mt-2.5 text-[#747474] text-[1.4vw] cursor-pointer">
                {items.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2.5 h-0.5 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
