import React from "react";
import style from "./ExternalLink.module.css";
const ExternalLink = (props) => {
  let { title, type } = props;
  return (
    <a className={type == "head" ? style.head : style.foot} href="#">
      {title}
    </a>
  );
};

export default ExternalLink;
