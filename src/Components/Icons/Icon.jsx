import React from "react";
import style from "./Icon.module.css";
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton } from "@mui/material";

const Icon = (props) => {
  let { name } = props;
  if (name === "apps")
    return (
      <IconButton>
        <AppsIcon fontSize="medium" className={style.Icon} />
      </IconButton>
    );
};

export default Icon;
