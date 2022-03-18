import React from "react";
import VideoItem from "./VideoItem";


 const VideoList = ({listOfVideos, onVideoSelect, onNextClick, onPrevClick,prev}) => {
     const videos = listOfVideos.map( v => {
         return <VideoItem 
             video={v} 
             onVideoSelect={onVideoSelect} 
             key={v.id.videoId}
             />
     })
    return <div className="ui relaxed divided list">
        {videos}
        
             <i style={{
            display: 'inline' ,
            justifyContent: 'center',
            marginRight:"30px",
            opacity: prev?1:0.5
            }}    
            className="arrow left icon huge long alternate"
            onClick={()=>onPrevClick()}
             />
             <i style={{
            display: 'inline' ,
            justifyContent: 'center'}}    
            className="arrow right icon huge long alternate"
            onClick={()=>onNextClick()}
             />
    </div>
}

export default VideoList;