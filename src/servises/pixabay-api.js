const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34365657-ad7721298800c8b8bb259833a';

function fetchImage(name, page = 0, limit = 12) {
  try {
    const response = fetch(
      `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation =horizontal&safesearch =true&page=${page}&per_page=${limit}`
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default fetchImage