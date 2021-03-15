import React, { useState } from 'react'
import './App.css'
import FroalaEditorComponent from './FroalaEditorComponent'

function App() {
  const [value, setValue] = useState('Welcome')

  console.log('value :>> ', value)

  return (
    <FroalaEditorComponent
      value={value}
      onChange={(_value) => setValue(_value)}
    />
  )
}

export default App
