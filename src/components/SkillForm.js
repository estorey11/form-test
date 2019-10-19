import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap';

let SkillForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Skills</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}

SkillForm = reduxForm({
  // a unique name for the form
  form: 'skills'
})(SkillForm)

export default SkillForm
