import "./VideoItem.css";
import React from "react";

const VideoItem = props => {
    return <div className="item video-item" onClick={()=>props.onVideoSelect(props.video)}>
        <img className="ui image" alt="cars" src={props.video.snippet.thumbnails.medium.url} />
        <div className="content">
             <div className="header">{props.video.snippet.title}</div>
             <br />
             <div className="description">{props.video.snippet.channelTitle}</div>
        </div>
    </div>
}

export default VideoItem;