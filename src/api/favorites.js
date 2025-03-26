import { postRequest,getRequest } from './index';
import { ApiUrls } from './urls';

export const saveImageInFavorites = async (imageId) => {
    const url = ApiUrls.favorites;

    try {
      const response = await postRequest(url, { image_id: imageId });
      // console.log('responsePost', response);

    } catch (error) {
      console.log(error);
      return [];
    }
}

export const loadFavorites = async () => {
    const url = ApiUrls.favorites;

    try {
      const response = await getRequest(url);
      // console.log('responseGetLoadFav', response);
      return response?.data ?? [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
