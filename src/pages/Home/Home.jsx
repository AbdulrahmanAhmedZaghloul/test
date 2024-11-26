
import React from "react";
import Hoodies from "../../components/Sections/Hoodies/Hoodies";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";
export default function Home() {



  return (
    <React.Fragment>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <Header />
      <div className="mx-auto mt-8 pt-5 pb-8">
        <div className="mx-auto mt-8 pt-5 pb-8">
          <Hoodies />
        </div>
      </div>
    </React.Fragment>
  );
}
