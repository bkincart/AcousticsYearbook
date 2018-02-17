import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import InputField from '../../sharedResources/components/InputField';
import SelectStateDropdownField from './SelectStateDropdownField';
import stateArray from '../constants/stateArray'

const CreateProfileFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputField}
        id="address"
        key="address"
        label="Address"
        name="address"
        type="text"
      />
      <Field
        component={InputField}
        id="city"
        key="city"
        label="City"
        name="city"
        type="text"
      />
      <Field
        component={SelectStateDropdownField}
        id="state"
        key="state"
        label="State"
        name="state"
        optionArray={stateArray}
      />
      <Field
        component={InputField}
        id="zip"
        key="zip"
        label="Zip"
        name="zip"
        type="text"
      />
      <Field
        component={InputField}
        id="country"
        key="country"
        label="Country"
        name="country"
        type="text"
      />
      <Field
        component={InputField}
        id="phone"
        key="phone"
        label="Phone"
        name="phone"
        type="text"
      />
      <Field
        component={InputField}
        id="email-hidden"
        key="email-hidden"
        label="Hide email on Profile"
        name="emailHidden"
        type="checkbox"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'createProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(CreateProfileFormFirstPage);
