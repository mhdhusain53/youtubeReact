import React from "react";


const VideoDetail = ({video})=>{

    

    if(video){
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <hr />
                <h3>{video.snippet.channelTitle}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );
    }else{
        return <div>
            ...Loading
        </div>
    }
}

export default VideoDetail;