import React from "react"
import { HomePage } from "../Views/HomePage"
import { Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}
