import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

const Header = () => {
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
      <header
          className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 
          transition-transform duration-300 ${show}`}
      >
        <Wrapper>
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Wrapper>
      </header>
  );
};

export default Header
