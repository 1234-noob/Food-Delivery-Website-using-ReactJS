import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";

const App = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      {showPopUp ? <LoginPopUp setShowPopUp={setShowPopUp} /> : <></>}
      <div className="w-[80%] m-auto">
        <Navbar setShowPopUp={setShowPopUp} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
