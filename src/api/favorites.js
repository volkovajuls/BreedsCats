import { postRequest,getRequest } from './index';
import { ApiUrls } from './urls';

export const saveImageInFavorites = async (imageId) => {
    const url = ApiUrls.favorites;

    try {
      const response = await postRequest(url, { image_id: imageId });

    } catch (error) {
      console.log(error);
      return [];
    }
}

export const loadFavorites = async () => {
    const url = ApiUrls.favorites;

    try {
      const response = await getRequest(url);
      return response?.data ?? [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
