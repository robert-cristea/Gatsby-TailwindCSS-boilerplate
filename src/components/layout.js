import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

if (typeof window !== `undefined`) {
  console.log("%c Built & Managed     \n by GATSBOY          \n https://gatsboy.com ", "background: #062484; color: #fff; font-size: normal; padding: 10px;");
}

function Layout({ children }) {
  return (
    <div className="w-full mx-auto bg-mainBack flex-col font-lora-regular text-primary">
      <div className="fixed w-full z-50">
        <Header />
      </div>

      <main className="flex-1 w-full text-color min-h-screen mx-auto z-10">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
