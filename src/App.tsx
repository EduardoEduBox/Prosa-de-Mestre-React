import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import WhatIsProsa from "./Components/WhatIsProsa";
import Numbers from "./Components/Numbers";
import WhoIsEdmilson from "./Components/WhoIsEdmilson";
import Advertise from "./Components/Advertise";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

import Preloader from "./Preloader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <Preloader loading={loading} />
      </div>
      <div className={loading ? "overflow-hidden max-h-screen" : ""}>
        <Navbar />
        <Header />
        <WhatIsProsa />
        <Numbers />
        <WhoIsEdmilson />
        <Advertise />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default App;
