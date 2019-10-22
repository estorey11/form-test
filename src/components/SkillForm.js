import React from 'react'
import { Field, reduxForm } from 'redux-form'
import SkillImage from './SkillImage'
import '../css/SkillForm.css';
import SkillCheckboxGroup from './SkillCheckboxGroup'

let SkillForm = props => {
  const { handleSubmit } = props
  let optionsList = [{id: 1, name: 'Warehouse', specialties: ['Filler', 'Filler2']},
                      {id: 2, name: 'Hospitality', specialties: ['Filler', 'Filler2']},
                      {id: 3, name: 'General Labor', specialties: ['Construction',   'Restoration']},
                      {id: 4, name: 'Office', specialties: ['Filler', 'Filler2']},
                      {id: 5, name: 'iRelaunch', specialties: ['Filler', 'Filler2']} ]

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
