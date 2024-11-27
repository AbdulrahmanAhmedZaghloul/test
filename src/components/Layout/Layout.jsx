import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
// import Sidebarr from "../Sidebar/Sidebarr.";
import Navbar from "../Nav/Navbar/Navbar";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
export default function Layout() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Sidebarr></Sidebarr> */}
      <div className="mx-auto">
        <SocialMediaLinks/>
        <Outlet className="py-10 mx-auto"></Outlet>
      </div>
      <Footer />
    </React.Fragment>
  );
}
