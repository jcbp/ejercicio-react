import './index.css'

const InputText = ({
  value,
  onChange = () => {},
  hasError = () => {}
}) => {
  return (
    <input
      type="text"
      className={
        'form-input' + 
        (hasError() ? ' border-error' : '')
      }
      value={value || ''}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    />
  )
}

export default InputText