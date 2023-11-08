/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer } from "react";
import { useSelector } from "react-redux";
const key = "AIzaSyAU4-RNW8sQ-Ky4MuRKr1Rr508QOGSP664";
const text_engine_id = "7731e76d02986670d";
const videos_engine_id = "6cd2c971010f418df";
const images_engine_id = "6f1f5c1e98fb0b5d4";
const shopping_engine_id = "058f58badbb11b9ff";
const news_engine_id = "45c7ffb4ee2bfeab9";
const books_engine_id = "14829b278c381109c";
const flights_engine_id = "9e27c885704409786";
const finance_engine_id = "71f0e89ad551a7398";

const useGoogleSearch = () => {
  const [data, setData] = React.useState(null);
  const { search: term, type } = useSelector((data) => data);
  //console.log(term, type);
  let engine = text_engine_id;
  if (type === "images") {
    engine = images_engine_id;
  } else if (type === "shopping") {
    engine = shopping_engine_id;
  } else if (type === "videos") {
    engine = videos_engine_id;
  } else if (type === "news") {
    engine = news_engine_id;
  } else if (type === "books") {
    engine = books_engine_id;
  } else if (type === "flights") {
    engine = flights_engine_id;
  } else if (type === "finance") {
    engine = finance_engine_id;
  }
  React.useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${engine}&q=${term}`
      )
        .then((res) => {
          //console.log(res);
          return res.json();
        })
        .then((data) => setData(data))
        .catch((e) => {
          console.log(e);
          setData(null);
        });
    };
    fetchData();
  }, [term, type]);
  return data ? data : null;
};

export default useGoogleSearch;
