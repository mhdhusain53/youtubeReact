import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "./apis/youtube.js";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state = {videos: [] ,
         selectedVideo: null,
          nextPageToken: null,
          prevPageToken: null,
           q:null
        };

    componentDidMount(props){
        this.onSearchSubmit("avengers theme song");
    }

    onSearchSubmit= async (props)=>{
        
            const response = await Youtube.get("/search",{
                params: {
                    q:props
                }
            });
            this.setState({
                videos:response.data.items, 
                selectedVideo: response.data.items[0],
                nextPageToken: response.data.nextPageToken,
                q:props
            })
        
    }

    onVideoSelect = (video)=>{
        this.setState({selectedVideo: video});
    }


    onNextClick = async ()=>{
        
        const response = await Youtube.get("/search",{
            params: {
                q:this.state.q,
                pageToken: this.state.nextPageToken
            }
        });
        this.setState({
            videos:response.data.items, 
            nextPageToken: response.data.nextPageToken,
            prevPageToken: response.data.prevPageToken
        })
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    onPrevClick = async ()=>{

        const response = await Youtube.get("/search",{
            params: {
                q:this.state.q,
                pageToken: this.state.prevPageToken
            }
        });
        this.setState({
            videos:response.data.items, 
            nextPageToken: response.data.nextPageToken})
        if(response.data.prevPageToken){
            this.setState({
                prevPageToken: response.data.prevPageToken})
        }else{
            this.setState({
                prevPageToken: null})
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    render(){
        return <div className="container" style={{margin:"15px"}}>
            <SearchBar onFormSubmit={this.onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row" >
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            listOfVideos={this.state.videos} 
                            onVideoSelect={this.onVideoSelect}
                            onNextClick={this.onNextClick}
                            onPrevClick={this.onPrevClick}
                            prev={this.state.prevPageToken?true:false}
                        />
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    }
}

export default App;