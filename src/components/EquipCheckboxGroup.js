import React from 'react';
import '../css/CustomSwitch.css';

class EquipCheckboxGroup extends React.Component {

    equipCheckboxGroup() {
        let { label, options, input } = this.props;

        return options.map((option, index) => {
            return (
            <div className={"check_row"+index%2} key={index}>
              <label className='equipOptionLabel' >{option.name}</label>
                <label className='switch equipSwitch'>
                    <input type="checkbox"
                           name={`${input.name}[${index}]`}
                           value={option.name}
                           checked={input.value.indexOf(option.name) !== -1}
                           onChange={(event) => {
                               const newValue = [...input.value];
                               if (event.target.checked) {
                                   newValue.push(option.name);
                               } else {
                                   newValue.splice(newValue.indexOf(option.name), 1);
                               }

                               return input.onChange(newValue);
                           }}/>
                    <span class="slider"></span>
                </label>
            </div>)
        });
    }

    render() {
        return (
            <div>
                {this.equipCheckboxGroup()}
            </div>
        )
    }
}


export default EquipCheckboxGroup;
