const validate = values => {
  const errors = {}
  if (!values.occupation) {
    errors.occupation = 'Please enter your occupation'
  }
  if (!values.industry) {
    errors.industry = 'Please select an industry'
  }
  if (!values.gradYear) {
    errors.gradYear = 'Please enter a graduation year'
  }
  if (!values.major) {
    errors.major = 'Please enter your major'
  }
  return errors
}

export default validate;
