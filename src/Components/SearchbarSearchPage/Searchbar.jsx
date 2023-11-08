import React, { useReducer } from "react";
import style from "./Searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, getState, useSelector } from "react-redux";

const Searchbar = (props) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let datum = useSelector((data) => data);
  const [state, setstate] = React.useState("/");

  return (
    <div className={style.container}>
      <input
        type="text"
        onChange={(e) => setstate(e.target.value)}
        className={style.input}
        onKeyDown={(e) => {
          if (e.code === "Enter") dispatch({ type: "query", payload: state });
        }}
        defaultValue={datum.search}
      />
      <div className={style.IconButtons}>
        <IconButton
          onClick={(e) => {
            dispatch({ type: "query", payload: state });
            navigate(`/search`);
          }}
        >
          <SearchIcon fontSize="small" className={style.search} />
        </IconButton>
      </div>
    </div>
  );
};

export default Searchbar;
