import React from "react"
import Text from "./components/text"
import States from "./components/states"
import UseRef from "./components/UseRef"
import './App.css'
function App() {

  return (
    <div className="btn btn-red">
      <h1>Props</h1>
      <Text name="Akbar" />
      <h1>States</h1>
      <States />
      <UseRef/>

    </div>
  )
}

export default App
