import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPosts } from '../actions';

class PostsNew extends Component {

  render() {

    // this come from wiring up the component with redux-form
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit( this.onSubmit.bind(this) ) } >
        <Field
            label="Title"
            name="title"
            component={ this.renderField }
        />

        <Field
          label="Categories"
          name="categories"
          component={ this.renderField }
        />

        <Field
          label="Post Content"
          name="content"
          component={ this.renderField }
        />

        <button type="submit"
                className="btn btn-primary">
                Submit
        </button>

        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>

      </form>
    );
  }

  onSubmit(values) {
    this.props.createPosts(values)
      .then( () => this.props.history.push('/') );
  }

  renderField(field) {
    // ES6 destructuring field.meta.touched and field.meta.error
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={ className } >
        <label>{ field.label }</label>
        <input className="form-control"
          type="text"
          { ...field.input }
        />
        <div className="text-help">
          { touched ? error : ''}
        </div>
      </div>
    );
  }

}

// Will receive an object with the values of each Field
function validate(values) {
  const error = {}

  if (!values.title) {
      error.title = "Enter a title";
  }

  if (!values.categories) {
      error.categories = "Enter some categories";
  }

  if (!values.content) {
      error.content = "Enter some content";
  }

  return error;
}

export default reduxForm({
  form: 'PostNewForm',
  validate: validate
})(
  connect(null, { createPosts } ) (PostsNew)
);
