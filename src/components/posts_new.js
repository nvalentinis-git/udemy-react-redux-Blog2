import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  render() {
    return (
      <form>
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

      </form>
    );
  }

  renderField(field) {
    return (
      <div className="form-group" >
        <label>{ field.label }</label>
        <input className="form-control"
          type="text"
          { ...field.input }
        />
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

  if (!values.const) {
      error.content = "Enter some content";
  }

  return error;
}

export default reduxForm({
  form: 'PostNewForm',
  validate: validate
})(PostsNew);
