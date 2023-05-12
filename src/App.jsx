import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsLetter: true

  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
    }))
}
console.log(formData)

  function handleSubmit(event) {
    event.preventDefault()
      if(formData.password === formData.passwordConfirm) {
        console.log("Successfully signed up")
      } else {
          console.log("Passwords do not match")
          return
      }
      
      if(formData.joinedNewsletter) {
          console.log("Thanks for signing up for our newsletter!")
      }

}

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email"
          placeholder= "Email address"
          className='form--input'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className='form--input'
          name='password'
          value={formData.password}
          onChange={handleChange}
         />
         <input
          type="password"
          placeholder="Confirm password"
          className='form--input'
          name='passwordConfirm'
          value={formData.passwordConfirm}
          onChange={handleChange}
         />
         <div className="form--marketing">
          <input 
            type="checkbox" 
            id="okayToEmail"  
            name='joinedNewsLetter'
            checked={formData.joinedNewsLetter}
            onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
         </div>
         <button className='form--btn'>Sign up</button>
      </form>
    </div>
  )
}
