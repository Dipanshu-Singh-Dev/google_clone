import React from "react";

const VideoContainer = ({ elem, modalOpener }) => {
  console.log(elem);
  return (
    <div>
      <video
        style={{
          maxWidth: "100%",
          height: "fit-content",
          border: "0",
          cursor: "pointer",
          borderRadius: "15px",
        }}
        height="auto"
        onClick={() => setTimeout(() => modalOpener(elem), 200)}
      >
        <source src={elem.videos.tiny.url} />
      </video>
    </div>
  );
};

export default VideoContainer;
