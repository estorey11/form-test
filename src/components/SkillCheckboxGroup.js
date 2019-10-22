import React from 'react';
import '../css/CustomSwitch.css';

class SkillCheckboxGroup extends React.Component {

    skillCheckboxGroup() {
        let {label, options, input } = this.props;

        return options.map((option, index) => {
            return (
            <div className="check_row" key={index}>
              <label>{option.name}</label>
                <label className="switch">
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
                         <span className="slider"></span>
                </label>
            </div>)
        });
    }

    render() {
        return (
            <div>
                {this.skillCheckboxGroup()}
            </div>
        )
    }
}


export default SkillCheckboxGroup;
