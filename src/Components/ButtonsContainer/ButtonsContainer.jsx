import React from "react";
import style from "./ButtonsContainer.module.css";
import { useNavigate } from "react-router-dom";

const ButtonsContainer = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button className={style.btn} onClick={() => navigate("/search")}>
        Google Search
      </button>
      <button className={style.btn}>I'm Feeling Lucky</button>
    </div>
  );
};

export default ButtonsContainer;
