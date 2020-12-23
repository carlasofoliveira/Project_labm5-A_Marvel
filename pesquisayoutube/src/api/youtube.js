import axios from 'axios'

const Key = "AIzaSyB49f04HJbUHZal32G-tfl_XiypcynqWfY";

export default axios.create({
        baseURL: 'https://youtube.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 20,
            key: Key,
            type: 'video'
        },
        headers: {}
    }
)