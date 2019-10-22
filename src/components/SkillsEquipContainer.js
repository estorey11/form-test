import React from 'react'
import FormNav from './FormNav'
import SkillForm from './SkillForm'
import CertForm from './CertForm'
import EquipForm from './EquipForm'
import { connect } from 'react-redux'
import no_skills_text from '../images/no_skills_text.svg'


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
        if ((this.props.knownSkills.length > 0)) {
          return <EquipForm knownSkills={this.props.knownSkills} onSubmit={this.submit}/>
        }
        return <img alt='You currently have no skills  to add equipment under. Please go back to the Skills tab to add some of your skills  and interests' style={{marginTop: '49px', paddingBottom: '520px'}} src={no_skills_text}/>
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

  if (state.form.skills && state.form.skills.values) {
    return { knownSkills: state.form.skills.values.knownSkills }
  }
  return { knownSkills: [] }
}

export default connect(mapStateToProps)(SkillsEquipContainer);
