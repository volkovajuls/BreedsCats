import { postRequest, getRequest, deleteRequest } from "./index";
import { ApiUrls } from "./urls";

export const saveImageInFavoritesApi = async (imageId) => {
  const url = `${ApiUrls.favorites}`;
  try {
    const response = await postRequest(url, { image_id: imageId });
    // console.log("responsePost ", response.data["message"]);
    return response.data["message"] === "SUCCESS";
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const loadImageInFavoritesApi = async (imageId) => {
  const url = `${ApiUrls.favorites}`;

  try {
    const response = await getRequest(url, { image_id: imageId });
    // console.log("loadimageFav ", response?.data);
    return response?.data ?? [];
  } catch (error) {
    console.log("load", error);
  }
};

export const loadFavoritesApi = async () => {
  const url = `${ApiUrls.favorites}`;

  try {
    const response = await getRequest(url);
    // console.log(response?.data);
    return response?.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteImageFromFavoritesApi = async (favoritesId) => {
  const url = `${ApiUrls.favorites}/${favoritesId}`;
  try {
    const response = await deleteRequest(url);
    return response.data["message"] === "SUCCESS";
  } catch (error) {
    console.log("delete", error);
  }
};
