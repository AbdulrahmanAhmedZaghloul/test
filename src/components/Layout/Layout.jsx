import React from "react";
// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sidebarr from "../Sidebar/Sidebarr.";
import Navbar from "../Navbar/Navbar";
export default function Layout() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebarr></Sidebarr>
      <div className="mx-auto">
        <Outlet className="py-10 mx-auto"></Outlet>
      </div>
      <Footer />
    </React.Fragment>
  );
}
