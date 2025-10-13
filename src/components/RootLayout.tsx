// src/components/RootLayout.tsx

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar"; 
import Chatbot from "./Chatbot";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Chatbot />
    </>
  );
};

export default RootLayout;