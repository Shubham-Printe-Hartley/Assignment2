import { Fragment } from "react";

export const Checkbox = (props) => {
  // gets label, parentClass(additional styling if required) 
  // and margin(for custom spacing around the component) from the parent class
  const {
    label,
    parentClass,
    margin
  } = props;

// returns JSX for the checkbox component
return(
    <div className={`form-group1 password-box ${parentClass} ${margin?margin: "mb-0"}`}>
      <div className="checkbox-wrapper">
        <label className="checkbox-content" >                    
          {label}
          <CheckboxTag {...props} />
        </label>
      </div> 
      <a href="/#">Forgot password?</a>               
    </div>
  )
};

// returns checkbox element to be injected into checkbox component
const CheckboxTag = (props) => {
  const{
    name,
    type,
    checked,
    value,
    onChange
  } = props;

  return(
    <Fragment>
      <input 
        name={name}
        type={type} 
        checked={checked} 
        value={value}
        onChange={onChange}
      />
      <span className="checkmark">
      </span>
    </Fragment>
  )
};