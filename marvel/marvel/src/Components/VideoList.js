import React from "react";
import Video from "./Video";
//Estrutura de código construído com base em tutorial
const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className="video-list">
            <div style={{ padding: "20px 0" }}>
                <h3
                    style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color:"White" }}
                >
                    Videos List
                </h3>
                <Video data={data} onVideoSelected={onVideoSelected} />
            </div>
        </div>
    );
};

export default VideoList;