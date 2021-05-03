import './index.css'

const Button = ({
  color,
  width,
  fontSize,
  children,
  onClick = () => {}
}) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: color,
        width: width,
        fontSize: fontSize
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button