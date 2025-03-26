import { getRequest } from './index';
import { ApiUrls } from './urls';

export const loadBreeds = async () => {
  const url = ApiUrls.breeds;
};

export const dataBreeds = async () => {
  const url = `${ApiUrls.breeds}`;
  try {
    const response = await getRequest(url);
    if (response?.data) {
      return response.data;
    }
    
  } catch (error) {
    console.log("1c ",error);
    return undefined;
  }
};

export const loadRandomImage = async (breedId) => {
console.log("breedId ",breedId)
const url = `${ApiUrls.imageSearch}?breed_id=${breedId}&has_breeds=true`;
console.log("url  ",url)
  try {
    const response = await getRequest(url);
    const dataCat = response.data[0];
    return dataCat;
  } catch (error) {
    console.log(error);
    return undefined;
  }}
