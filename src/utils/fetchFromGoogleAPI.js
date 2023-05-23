import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyDFtX8VAWg34r0FRYVxakBgsJZTFTyupB0';

const options = {
    params: {
        maxResults: '20'
    },
};

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=reactjs&key=[YOUR_API_KEY]
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=India&maxResults=20&q=reactjs&relatedToVideoId=DuudSp4sHmg&key=[YOUR_API_KEY]

export const fetchFromGoogleAPI = async (url) => {

    try {
        const { data } = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`, options);
        
        return data;
    } catch (error) {
        console.error(error);
    }
}
