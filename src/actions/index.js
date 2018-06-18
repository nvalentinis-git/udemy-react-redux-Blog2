import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts'
const API_KEY = 'key=nvalentinis-redux'

export function fetchPosts() {
  const requestPromise = axios.get(`${ROOT_URL}?${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: requestPromise
  };
}

export function createPosts(values) {
  const requestPromise = axios.post(`${ROOT_URL}?${API_KEY}`, values);

  return {
    type: CREATE_POSTS,
    payload: requestPromise
  }
}
