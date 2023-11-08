import React from "react";
import styles from "./NavbarSearch.module.css";
import SearchBar from "../SearchbarSearchPage/Searchbar";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ImageIcon from "@mui/icons-material/InsertPhotoOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOfferOutlined";
import { useDispatch, useSelector } from "react-redux";

const NavbarSearch = ({ search }) => {
  const active = useSelector((data) => data.type);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topleft}>
          <img className={styles.logo} alt="logo" src={process.env.PUBLIC_URL + "/images/logo.png"}/>
          <SearchBar val={search} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.optionsContainer}>
          <div
            className={
              active === "text" ? styles.options__active : styles.options
            }
            onClick={() =>
              dispatch({
                type: "text",
              })
            }
          >
            <SearchIcon />
            <p>All</p>
          </div>
          <div
            className={
              active === "videos" ? styles.options__active : styles.options
            }
            onClick={() =>
              dispatch({
                type: "videos",
              })
            }
          >
            <SlideshowIcon fontSize="small" color="gray" />
            <p>Videos</p>
          </div>
          <div
            className={
              active === "news" ? styles.options__active : styles.options
            }
            onClick={() =>
              dispatch({
                type: "news",
              })
            }
          >
            <NewspaperIcon fontSize="small" color="gray" /> <p>News</p>
          </div>
          <div
            className={
              active === "images" ? styles.options__active : styles.options
            }
            onClick={() =>
              dispatch({
                type: "images",
              })
            }
          >
            <ImageIcon fontSize="small" color="gray" /> <p>Images</p>
          </div>
          <div
            className={
              active === "shopping" ? styles.options__active : styles.options
            }
            onClick={() =>
              dispatch({
                type: "shopping",
              })
            }
          >
            <LocalOfferIcon fontSize="small" color="gray" /> <p>Shopping</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
