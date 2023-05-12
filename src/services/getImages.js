import axios from 'axios';

const API_KEY = '28875858-be00e402ceba03ed1852ded5b';

export const getImages = async (query, page) => {
  const respons = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12  `
  );
  return respons.data;
};
