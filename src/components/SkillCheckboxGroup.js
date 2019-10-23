import React from 'react';
import '../css/CustomSwitch.css';
import Slider, { Handle }  from "rc-slider";
import { Field, reduxForm } from 'redux-form'
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import SliderHandle from './SliderHandle';



class SkillCheckboxGroup extends React.Component {



    skillSpecialtyGroup(specialties){
      return specialties.map((specialty, index)=>{
        return(
          <div className="specialtyRow" key={index}>


            <Slider min={0}
                    max={10}
                    railStyle={{ backgroundColor: '#6A6A6A', height: 5 }}
                    handle={ (handleProps) => {
                        return (
                            <Handle { ...handleProps }>
                                <SliderHandle />
                            </Handle>
                        )
                    }}
                    trackStyle={{ backgroundColor: '#468DFB', height: 5 }}
            />


          </div>
        )
      })
    }

    skillCheckboxGroup() {
        let {label, options, input } = this.props;

        return options.map((option, index) => {
            return (
              <>
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
                </div>

                {input.value.indexOf(option.name) !== -1 ? this.skillSpecialtyGroup(option.specialties): <></>}


              </>

            )
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
