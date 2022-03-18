import axios from "axios";

const KEY="AIzaSyCTFsCN0S3vadOyDph3CvkVjFjGge7-rms";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResults: 10,
        key: KEY
    }
});