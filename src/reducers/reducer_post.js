import {FETCH_POSTS, FETCH_POST} from '../actions/index';
import _ from 'lodash';

// this will return a new pease of state
// an object will represent the state
export default function (state = {}, action) {

  switch (action.type) {
    case FETCH_POSTS:
      // transform from an Array to an Object
      return _.mapKeys(action.payload.data, 'id');

    case FETCH_POST:
        const post = action.payload.data;
        // const newState = { ...state };
        // newState[post.id] = post;
        //
        // return newState;

        // ES6 syntax sugar, Computed properties
        return { ...state, [post.id]: post };
    default:
        return state;
  }
}
