import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POSTS = 'CREATE_POSTS';
export const DELETE_POST = 'DELETE_POST';

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

export function fetchPost(id) {
  const requestPromise = axios.get(`${ROOT_URL}/${id}?${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: requestPromise
  }
}

export function deletePost(id, callback) {
  const requestPromise = axios.delete(`${ROOT_URL}/${id}?${API_KEY}`)
    .then( () => callback() );

  return {
    type: DELETE_POST,
    payload: id
  }
}
