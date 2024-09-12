import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="m-auto mt-[100px] text-[3vw] item-center  font-medium"
    >
      <p className="text-center">
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className=" flex justify-center gap-[2vw] mt-10">
        <img
          className="w-[30vw] max-w-44 duration-500 cursor-pointer hover:scale-105"
          src={assets.play_store}
          alt=""
        />
        <img
          className="w-[30vw] max-w-44 duration-500 cursor-pointer hover:scale-105"
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
