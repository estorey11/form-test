import React from 'react'
import TestContactForm from './TestContactForm'
import FormNav from './FormNav'
import SkillForm from './SkillForm'
import CertForm from './CertForm'
import EquipForm from './EquipForm'
import { connect } from 'react-redux'

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
        return <SkillForm initialValues={this.props.skills} onSubmit={this.submit}/>
      case 'equip':
        if (anyTrue(this.props.skills)) {
          return <EquipForm onSubmit={this.submit}/>
        }
        return <div>Nope</div>
      case 'certs':
        return <CertForm onSubmit={this.submit}/>
      default:
        return <SkillForm onSubmit={this.submit}/>
    }
  }

  handleTabClick=event=>{
    this.setState({
      form: event.target.value
    })
  }

  render() {
    return (
      <div>
        <FormNav form={this.state.form} handleTabClick={this.handleTabClick}/>
        {this.renderForm()}
      </div>
    )
  }
}

const mapStateToProps=(state) =>{

  if (state.form.skills) {
    return { skills: state.form.skills.values }
  }
  return { skills: {} }
}

export default connect(mapStateToProps)(SkillsEquipContainer);

const anyTrue=(obj)=>{

   for(let o in obj)
       if(obj[o]) return true;

   return false;
 }
