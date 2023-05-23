import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '25'
    },
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': 'dd7f820412msh3220d152eccb0c6p15532fjsnfe4dddafd832',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};




export const fetchFromAPI = async (url) => {
    
    try {
        // const response = await axios.request(`${BASE_URL}/${url}`, options);
        // console.log(response.data);
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        // console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}