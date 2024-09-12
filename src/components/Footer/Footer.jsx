import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-[100px]"
    >
      <div className="w-full grid grid-cols-3 gap-20">
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde
            deserunt eaque omnis, fugit reiciendis tempore, natus commodi
            asperiores officiis nisi magnam tempora consectetur. Soluta quo
            temporibus laborum praesentium perspiciatis?
          </p>
          <div className="flex">
            <img className="w-10 mr-3.5" src={assets.facebook_icon} alt="" />
            <img className="w-10 mr-3.5" src={assets.twitter_icon} alt="" />
            <img className="w-10 mr-3.5" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white font-semibold text-xl">COMPANY</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">Home</li>
            <li className="mb-2.5 cursor-pointer">About us</li>
            <li className="mb-2.5 cursor-pointer">Delivery</li>
            <li className="mb-2.5 cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white font-semibold text-xl">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2.5 cursor-pointer">+1-213-456-8567</li>
            <li className="mb-2.5 cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 my-5 bg-gray-400 border-none" />
      <p>Copyright 2024 &#169; Tomato.com - All Right Reserved. </p>
    </div>
  );
};

export default Footer;
