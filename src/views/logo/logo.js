
// returns JSX for logo component based on image passed from parent component
const Logo = ({img}) => {
  return (
    <div  className="logo-wrapper">
      <img data-testid="logo" src={img} alt="logo" />
    </div>
  )
}

export default Logo;