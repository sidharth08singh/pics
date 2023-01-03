import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6JT263FYjuMFTZrTcHf-hZi1JEHc2VtmPH_qT3FQZ7g'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;