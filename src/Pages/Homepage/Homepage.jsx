import React from "react";
import NavbarHome from "../../Components/NavbarHome/NavbarHome";
import LogoContainer from "../../Components/LogoContainer/LogoContainer";
import Searchbar from "../../Components/Searchbar/Searchbar";
import ButtonsContainer from "../../Components/ButtonsContainer/ButtonsContainer";
import Footer from "../../Components/Footer/Footer";
import style from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={style.Homepage}>
      <NavbarHome />
      <LogoContainer />
      <Searchbar />
      <ButtonsContainer />
      <Footer />
    </div>
  );
};

export default Homepage;
