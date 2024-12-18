
import React from "react";
 import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet-async";
import Sections from "../../components/Sections/Sections";
import iconimage from '../../assets/image/black.png'

export default function Home() {

  return (
    <React.Fragment>
      <Helmet>
        <title>HOME</title>
        <link rel="icon" href={iconimage} />

      </Helmet>
      <Header />
      <div className="mx-auto mt-8 pt-5 pb-8">
        <div className="mx-auto mt-8 pt-5 pb-8">
          <Sections />
        </div>
      </div>
    </React.Fragment>
  );
}
