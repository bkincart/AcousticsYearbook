import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from './validate';
import InputField from '../../sharedResources/components/InputField';
import FileDropField from '../../sharedResources/components/FileDropField';


const CreateProfileFormPage1 = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h2>Add a Profile Picture</h2>
      <form onSubmit={handleSubmit}>
        <Field
          component={FileDropField}
          key="picture"
          name="picture"
        />
        <div>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'createProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(CreateProfileFormPage1);
