import React from 'react';
import { Field, reduxForm } from 'redux-form';

import InputField from '../../sharedResources/components/InputField';
import SelectDropdownField from '../../sharedResources/components/SelectDropdownField';
import stateArray from '../constants/stateArray'
import TextareaField from '../../sharedResources/components/TextareaField';
import validate from './validate';

const CreateProfileFormThirdPage = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={InputField}
        id="grad-year"
        key="grad-year"
        label="BC Graduation Year *"
        name="grad-year"
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
        name="last-name-bc"
        type="text"
      />
      <Field
        component={InputField}
        id="audition-song"
        key="audition-song"
        label="Audition Song"
        name="audition-song"
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
        <button type="button" className="previous" onClick={props.previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'createProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(CreateProfileFormThirdPage);
