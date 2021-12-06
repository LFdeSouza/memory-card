import React from "react";
import loadingGif from "../assets/charlizard_loading.gif";

const Loading = () => {
  return (
    <div className="modal loading">
      <img src={loadingGif} alt="Loading" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
