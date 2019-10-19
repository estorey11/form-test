import React from 'react'
import TestContactForm from './TestContactForm'
import FormNav from './FormNav'
import SkillForm from './SkillForm'
import CertForm from './CertForm'
import EquipForm from './EquipForm'


class SkillsEquipContainer extends React.Component {

  state={
    form: 'skills'
  }

  submit = values => {
    // print the form values to the console
    console.log(values)
  }

  renderForm=()=>{
    switch (this.state.form) {
      case 'skills':
        return <SkillForm onSubmit={this.submit}/>
      case 'equip':
        return <EquipForm onSubmit={this.submit}/>
      case 'cert':
        return <CertForm onSubmit={this.submit}/>
      default:
        return <SkillForm onSubmit={this.submit}/>
    }
  }

  handleTabClick=event=>{
    this.setState({
      form: event.target.name
    })
  }

  render() {
    return (
      <div>
        <FormNav handleTabClick={this.handleTabClick}/>
        {this.renderForm()}
      </div>
    )
  }
}

export default SkillsEquipContainer;
