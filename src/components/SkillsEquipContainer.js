import React from 'react'
import TestContactForm from './TestContactForm'

class SkillsEquipContainer extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <TestContactForm onSubmit={this.submit} />
  }
}

export default SkillsEquipContainer;
