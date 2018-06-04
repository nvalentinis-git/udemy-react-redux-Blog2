import {FETCH_POSTS} from '../actions/index';
import _ from 'lodash';

// this will return a new pease of state
// an object will represent the state
export default function (state = {}, action) {

  switch (action.type) {
    case FETCH_POSTS:
      // transform from an Array to an Object
      return _.mapKeys(action.payload.data, 'id');

    default:
        return state;
  }
}
