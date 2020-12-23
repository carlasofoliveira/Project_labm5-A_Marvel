import React from "react";
//Estrutura de código construído com base em tutorial
const Videoplayer = ({ videoId }) => {
    if (!videoId) {
        return (
            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
                Search for a video
            </p>
        );
    }
    return (
        <div className="video-player">
            <iframe
                title={videoId}
                className="video-iframe"
                src={`https://www.youtube.com/embed/${videoId}`}
            />
        </div>
    );
};

export default Videoplayer;