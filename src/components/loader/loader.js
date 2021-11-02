const Loader = (props) => {

  // growing sets a growing loader(by default its a rotating loader)
  // color sets the color of the loader
  const {growing, color, loading} = props;

  // returns null if loadig is set to false
  if(!loading) {
    return null;
  }

  // returns JSX for loader if loading is true
  return (
    <div className={`text-center text-${color}`}>
      <div className={growing?"spinner-grow": "spinner-border"} >        
        <span className="sr-only"></span>
      </div>
    </div>
  )
};

export default Loader;