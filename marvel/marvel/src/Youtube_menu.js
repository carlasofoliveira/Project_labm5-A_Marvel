import React from 'react';
import "./style.css";
import Search from './Components/search';
import youtubeApi from "./api/youtube";
import VideoList from "./Components/VideoList";
import Videoplayer from "./Components/VideoPlayer";

//Estrutura de código construído com base em tutorial
class YouTubeMenu extends React.Component {
    state = {
        videoMetaInfo: [],
        selectedVideoId: null
    }

    onSearch = async Keyword => {
        console.log('a pesquisar: ' + Keyword);
        const response = await youtubeApi.get("/search", {
            params: {
                q: Keyword
            }

        });
        console.log(response);

        this.setState({
            videoMetaInfo: response.data.items,
            selectedVideoId:response.data.items[0].id.videoId
        });
        console.log(this.state);
    };


    render() {
        return (
            <div className="Appyoutube">

                <Search onSearch={this.onSearch}/>
                <VideoList onVideoSelected={this.onVideoSelected}
                           data={this.state.videoMetaInfo}/>
                <Videoplayer videoId={this.state.selectedVideoId}/>
            </div>
        );
    }
}

export default YouTubeMenu;
