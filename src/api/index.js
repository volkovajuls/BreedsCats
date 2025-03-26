import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key':
      'live_jiHKfaFn1XSRWlorH2WxwnmltLB5laAsQQjPFV03bAhTON0WczTTFBTufoYIQE0Q',
  },
});

export const getRequest = async (url, config) => {
  try {
    return instance.get(url, config);
  } catch (err) {
    // console.error(`error:, ${err}`);
    // if (err.response) {
    //   console.log(err.response.data);
    //   console.log(err.response.status);
    //   console.log(err.response.headers);
    // }
    logError(err);
  }
};

export const postRequest = async (url, body) => {
  try {
    return instance.post(url, body);
  } catch (e) {
    logError(e);
  }
};

export const deleteRequest = async (url, config) => {
  try {
    return instance.delete(url, config);
  } catch (e) {
    logError(e);
  }
};

const logError = (error) => {
  console.log('newerror', error);
  //401 если слетает токен(обновился),можно перекинуть на стр с логином
};
