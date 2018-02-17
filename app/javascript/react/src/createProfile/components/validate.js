const validate = values => {
  const errors = {}
  if (!values.occupation) {
    errors.occupation = 'Please enter your occupation'
  }
  if (!values.industryId) {
    errors.industryId = 'Please select an industry'
  }
  if (!values.graduationYear) {
    errors.graduationYear = 'Please enter a graduation year'
  }
  if (!values.major) {
    errors.major = 'Please enter your major'
  }
  return errors
}

export default validate;
