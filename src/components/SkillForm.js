import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap';
import CustomSwitch from './CustomSwitch'
import SkillImage from './SkillImage'
import '../css/SkillForm.css';


let SkillForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <SkillImage />
      <div class="check_row">
        <label htmlFor="warehouse">Warehouse</label>
        <Field name="warehouse" class="switch" component={CustomSwitch}/>
      </div>
      <div class="check_row">
        <label htmlFor="hospitality">Hospitality</label>
        <Field name="hospitality" class="switch" component={CustomSwitch}/>
      </div>
      <div class="check_row">
        <label htmlFor="generalLabor">General Labor</label>
        <Field name="generalLabor" class="switch" component={CustomSwitch}/>
      </div>
      <div class="check_row">
        <label htmlFor="office">Office</label>
        <Field name="office" class="switch" component={CustomSwitch}/>
      </div>
      <div class="check_row">
        <label htmlFor="iRelaunch">iRelaunch</label>
        <Field name="iRelaunch" class="switch" component={CustomSwitch}/>
      </div>
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
