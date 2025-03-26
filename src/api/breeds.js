import { getRequest } from './index';
import { ApiUrls } from './urls';

export const loadBreeds = async () => {
  const url = ApiUrls.breeds;
};

export const dataBreeds = async () => {
  const url = `${ApiUrls.breeds}`;
  try {
    const response = await getRequest(url);
    // let response2 = {id:2,'data':undefined} ;
    // console.log('response2    ', response2.data);
    // if (response2?.data)
    //     console.log(" response2?");
    if (response?.data) {
      return response.data;
    }
    
  } catch (error) {
    console.log("1c ",error);
    return undefined;
  }
};

export const loadRandomImage = async (breedId) => {
//  const url = `${ApiUrls.imageSearch}?has_breeds=true&include_breeds=true`;
//const breedId = "abys";
console.log("breedId ",breedId)
const url = `${ApiUrls.imageSearch}?breed_id=${breedId}&has_breeds=true`;
console.log("url  ",url)
 //   const url = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&include_breeds=false&include_breeds=true&has_breeds=true`;
  try {
    const response = await getRequest(url);
    const dataCat = response.data[0];
    return dataCat;
  } catch (error) {
    console.log(error);
    return undefined;
  }}
