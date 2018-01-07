import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputField from '../../sharedResources/components/InputField';
import SelectDropdownField from '../../sharedResources/components/SelectDropdownField';
import stateArray from '../constants/stateArray'
import TextareaField from '../../sharedResources/components/TextareaField';
import validate from './validate';

const CreateProfileFormSecondPage = props => {
  // debugger;
  let optionArray = [
    {
      id: 1,
      name: 'test option'
    }
  ]
  return (
    <form onSubmit={props.handleSubmit}>
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
        id="industry"
        key="industry"
        label="Industry *"
        name="industry"
        optionArray={optionArray}
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
        name="high-school"
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
        <button type="button" className="previous" onClick={props.previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'createProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(CreateProfileFormSecondPage);
