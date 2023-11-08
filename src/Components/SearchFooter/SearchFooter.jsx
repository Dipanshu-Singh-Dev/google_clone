import React from "react";
import styles from "./SearchFooter.module.css";
const SearchFooter = () => {
  function showPosition(position, locationUpdater) {
    setlatLong(`${position.coords.latitude},${position.coords.longitude}`);
  }
  let [latLong, setlatLong] = React.useState();
  navigator.geolocation.getCurrentPosition(showPosition, setlatLong);

  return (
    <div className={styles.container}>
      <div className={styles.top}>{latLong}</div>
      <div className={styles.bottom}>
        <p>Help</p>
        <p>Send Feedback</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>
    </div>
  );
};

export default SearchFooter;
