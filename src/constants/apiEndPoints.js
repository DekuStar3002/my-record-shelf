const BACKEND_URL = 'http://localhost:8080';
const TOKEN = 'UGFsYWsgQWdhcndhbA==';

const GET_ALL_MUSIC = () => {
  return {
    baseURL: BACKEND_URL,
    url: '/api/records',
    method: 'get',
    headers: { authorization: 'Bearer ' + TOKEN }
  };
}

const GET_LIKES_BY_ID = (id) => {
  return {
    baseURL: BACKEND_URL,
    url: `/api/records/${id}/likes`,
    method: 'get',
    headers: { authorization: 'Bearer ' + TOKEN }
  };
}

const UPDATE_LIKE_BY_ID = (id, like) => {
  return {
    baseURL: BACKEND_URL,
    url: `/api/records/${id}/likes`,
    method: 'patch',
    headers: { authorization: 'Bearer ' + TOKEN },
    data: { like: like }
  };
}

export { GET_ALL_MUSIC, GET_LIKES_BY_ID, UPDATE_LIKE_BY_ID };