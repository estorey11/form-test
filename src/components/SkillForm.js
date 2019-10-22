import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap';
import CustomSwitch from './CustomSwitch'
import SkillImage from './SkillImage'
import '../css/SkillForm.css';
import SkillCheckboxGroup from './SkillCheckboxGroup'

let SkillForm = props => {
  const { handleSubmit } = props
  let optionsList = [{id: 1, name: 'Warehouse'}, {id: 2, name: 'Hospitality'}, {id: 3, name: 'General Labor'}, {id: 4, name: 'Office'}, {id: 5, name: 'iRelaunch'} ]

  return (
    <form onSubmit={handleSubmit}>
      <SkillImage />
      <Field name="knownSkills" component={SkillCheckboxGroup} options={optionsList} />
    </form>
  )
}

SkillForm = reduxForm({
  // a unique name for the form
  form: 'skills',
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(SkillForm)

export default SkillForm
