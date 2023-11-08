import React from "react";
import styles from "./ResultsNumber.module.css";
const ResultsNumber = (props) => {
  let { totalResults, searchTime } = props;

  return (
    <div className={styles.container}>
      <p>
        About {totalResults} results ({searchTime} seconds)
      </p>
    </div>
  );
};

export default ResultsNumber;
