import React from 'react'
import { reduxForm } from 'redux-form'


let CertForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      This would be a certifications form.
    </form>
  )
}

CertForm = reduxForm({
  // a unique name for the form
  form: 'certifications'
})(CertForm)

export default CertForm
