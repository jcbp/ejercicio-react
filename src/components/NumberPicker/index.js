import React, { useState } from 'react'
import InputText from '../InputText'
import Slider from 'rc-slider'

import './index.css'
import 'rc-slider/assets/index.css'

const NumberPicker = ({
  title,
  min,
  max,
  formatter = (value) => value,
  onChange
}) => {
  const [number, setNumber] = useState('')

  const handleChange = (value) => {
    setNumber(value)
    onChange(value)
  }

  return (
    <div className="mb-3 px-2">
      <div className="row v-center">
        <div>
          <label className="text-white">
            {title}
          </label>
        </div>
        <div>
          <InputText
            value={formatter(number)}
            onChange={(value) => handleChange(
              value.replace(/\D/g, '')
            )}
            hasError={() => {
              return number && (number < min || number > max)
            }}
          />
        </div>
      </div>
      <div className="row">
        <Slider
          min={min}
          max={max}
          step={1}
          value={number}
          onChange={handleChange}
          handleStyle={{
            border: 'none',
            backgroundColor: '#fff',
            width: '18px',
            height: '18px',
            marginTop: '-7px',
          }}
          railStyle={{
            height: '5px',
            borderRadius: '0',
          }}
          trackStyle={{
            backgroundColor: '#fff',
          }}
        />
      </div>
      <div className="row">
        <label className="sublabel">
          {formatter(min)}
        </label>
        <div className="sublabel">
          {formatter(max)}
        </div>
      </div>
    </div>
  )
}

export default NumberPicker