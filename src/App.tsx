import React from "react"
import { BrowserRouter as RouteContainer } from "react-router-dom"
import { Router } from "./Router"
import "./App.scss"



function App() {
  return (
    <div className="App">
      <RouteContainer>
        <Router />
      </RouteContainer>
    </div>
  )
}

export default App
