import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index'

class PostIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary"
                to="/posts/new">
              New Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }

  renderPosts() {
    const { posts } = this.props;

    // use helper lib Lodash
    return _.map(posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <span> {post.title} </span>
          <span> {post.categories} </span>
      </li>)
    });
  }
}

// State will be available on this.props.posts
function mapStateToProps(appState) {
  return {
    posts: appState.posts
  }
}

// Wire React with Redux using the connect function
// the acction creator will be available on this.props.fetchPosts
export default connect(mapStateToProps, { fetchPosts }) (PostIndex);
