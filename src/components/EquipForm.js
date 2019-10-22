import React from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomSwitch from './CustomSwitch'
import '../css/EquipForm.css';
import EquipCheckboxGroup from './EquipCheckboxGroup'
import EquipFormText from './EquipFormText'

let EquipForm = props => {

  const { handleSubmit } = props

  let options = {
      "General Labor": [
          {id: 1, name: 'Steel Toed Boots'},
          {id: 2, name: 'Hard Hat'},
          {id: 3, name: 'Safetey Vest'},
          {id: 4, name: 'Eye Protection'},
          {id: 5, name: 'Gloves'}],
      "Warehouse": [
          {id: 1, name: 'These'},
          {id: 2, name: 'Are'},
          {id: 3, name: 'Placeholders'}],
      "Hospitality": [
          {id: 1, name: 'These'},
          {id: 2, name: 'Are'},
          {id: 3, name: 'Placeholders'}],
      "Office": [
          {id: 1, name: 'These'},
          {id: 2, name: 'Are'},
          {id: 3, name: 'Placeholders'}],
      "iRelaunch": [
          {id: 1, name: 'These'},
          {id: 2, name: 'Are'},
          {id: 3, name: 'Placeholders'}],
  }

  const renderEquipForms=function(){
    return props.knownSkills.map((skill, index)=>{
      return(
        <div className="equipForm" id={index}>
          <div className="labelDiv" id={index} >
            <label className='itemsLabel' id={index} >{skill} Items</label>
          </div>
            <Field name={skill}
                  component={EquipCheckboxGroup}
                  options={options[skill]}
             />
        </div>
      )
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <EquipFormText />
      {renderEquipForms()}
    </form>
  )
}

EquipForm = reduxForm({
  // a unique name for the form
  form: 'equipment',
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
  updateUnregisteredFields: true
})(EquipForm)

export default EquipForm
