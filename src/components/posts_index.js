import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index'

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>

       </div>
    );
  }

}

// Wire React with Redux using the connect function
// the acction creator will be available on this.props.fetchPosts
export default connect(null, { fetchPosts }) (PostIndex);
