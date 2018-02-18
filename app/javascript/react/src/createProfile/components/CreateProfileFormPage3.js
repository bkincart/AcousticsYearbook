import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from './validate';
import InputField from '../../sharedResources/components/InputField';
import SelectDropdownField from '../../sharedResources/components/SelectDropdownField';
import TextareaField from '../../sharedResources/components/TextareaField';

const CreateProfileFormPage3 = props => {
  const { handleSubmit, previousPage, industries } = props;
  return (
    <div>
      <h2>Current Life Information</h2>
      <form onSubmit={handleSubmit}>
        <Field
          component={InputField}
          id="occupation"
          key="occupation"
          label="Occupation *"
          name="occupation"
          type="text"
        />
        <Field
          component={SelectDropdownField}
          id="industry-id"
          key="industry-id"
          label="Industry *"
          name="industryId"
          optionArray={industries}
        />
        <Field
          component={TextareaField}
          id="blurb"
          key="blurb"
          label="Share a quick blurb about yourself!"
          name="blurb"
        />
        <Field
          component={InputField}
          id="high-school"
          key="high-school"
          label="High School"
          name="highSchool"
          type="text"
        />
        <Field
          component={InputField}
          id="hometown"
          key="hometown"
          label="Hometown"
          name="hometown"
          type="text"
        />
        <Field
          component={TextareaField}
          id="family"
          key="family"
          label="Family Members/Friends/Honorary Acoustics"
          name="family"
          type="text"
        />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
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
})(CreateProfileFormPage3);
