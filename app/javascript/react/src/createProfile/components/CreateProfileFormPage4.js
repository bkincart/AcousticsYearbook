import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import InputField from '../../sharedResources/components/InputField';

const CreateProfileFormPage4 = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputField}
        id="graduation-year"
        key="graduation-year"
        label="BC Graduation Year *"
        name="graduationYear"
        type="text"
      />
      <Field
        component={InputField}
        id="major"
        key="major"
        label="BC Major *"
        name="major"
        type="text"
      />
      <Field
        component={InputField}
        id="last-name-bc"
        key="last-name-bc"
        label="Last Name while at BC"
        name="lastNameBc"
        type="text"
      />
      <Field
        component={InputField}
        id="audition-song"
        key="audition-song"
        label="Audition Song"
        name="auditionSong"
        type="text"
      />
      <Field
        component={InputField}
        id="solos"
        key="solos"
        label="Stix Solos"
        name="solos"
        type="text"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'createProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(CreateProfileFormPage4);
