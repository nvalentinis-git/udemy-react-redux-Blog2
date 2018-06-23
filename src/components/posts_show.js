import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions'

class PostsShow extends Component {

  render() {
    const { post } = this.props;

    if (!post) {
      return <div> Loading Post... </div>;
    }

    return (
      <div>

        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          >
            Delete
          </button>

        <div>
          <h3>Title: {post.title}</h3>
        </div>

        <div>
          <h6>Categories: {post.categories}</h6>
        </div>

        <div>
          <p> Content: {post.content} </p>
        </div>

      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => { this.props.history.push('/') } );
  }

}

// reseive the app state as 'state'
// ES6 object destructuring {posts}
// ownProps will receive the same props as the Component
function mapStateToProps( {posts}, ownProps ) {
  const { id } = ownProps.match.params;

  return { post: posts[id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost } ) (PostsShow);
