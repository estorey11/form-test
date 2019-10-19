import React from 'react'
import TestContactForm from './TestContactForm'
import FormNav from './FormNav'

class SkillsEquipContainer extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <div>
        <FormNav />
        <TestContactForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default SkillsEquipContainer;
