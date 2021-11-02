import { Fragment } from "react";


export const Input = (props) => {

  // gets label, parentClass(additional styling if required) 
  // and margin(for custom spacing around the component) from the parent class
  const {
    name,
    label,
    parentClass,
    margin,
    error,
    touched
  } = props;

  // returns JSX for input component
  return (
    <div className={`form-group1 ${parentClass} ${margin?margin: "mb-0"}`}>
      {label && (
        <label htmlFor = {name} className="custom-form-label">
          {label}
        </label>
      )}

      {/* injecting input element */}
      <InputTag {...props} />

      {/* showing error message based on validations */}
      {error && touched && (
        <div className="text-danger my-2">{error}</div>
      )}
    </div>
  )

}

// returns input element to be injected into the input component
const InputTag = (props) => {
  const{
    type,
    name,
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    disabled
  } = props;

  return (
    <Fragment>
      <input 
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
      /> 
    </Fragment>
  )
}