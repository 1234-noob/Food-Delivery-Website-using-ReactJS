import "./Header.css";
const Header = () => {
  return (
    <div className="h-[34vw]  my-8 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative  ">
      <div className="header-content absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h1 className="font-medium  text-white md:text-6xl text-2xl">
          Order your favourite food here
        </h1>
        <p className="text-white text-lg">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and satisfy your cravings and
          elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-lg rounded-4xl ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
