import React from 'react'
import { Link } from 'react-router-dom'
function CaptainSignUp() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState({})


  const onSubmitHandler = (e) => {
    e.preventDefault()
    // const newUser = { firstName:firstName, lastName:lastName, userEmail: email, UserPassword: password }
    // console.log(newUser)  // this will print the correct data
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setUserData({username :{ FirstName:firstName, LastName:lastName}, UserEmail: email, UserPassword: password })
    console.log(userData)  // this will print the correct data

  }
  return (
    <div className="py-5 px-5 flex flex-col justify-between h-screen">
      <div>

        <Link to="/">
        <img className="w-16 mb-5.5" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber_Logo" />
        </Link>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <h3 className="text-base font-medium mb-2">Captain name</h3>
          <div className='flex gap-2.5 mb-6'>
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-sm placeholder:text-base"
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />

            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-sm placeholder:text-base"
              required
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <h3 className="text-base font-medium mb-2">Captain email</h3>

          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-sm placeholder:text-base"
            required type="password"
            placeholder="Enter Password"
            value={password} 
            onChange={(e) =>{
              setPassword(e.target.value)
            }}
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">User Login</button>

        </form>
        <p className='text-center'>Already have account? <Link to={'/captainLogin'} className='text-blue-600 '>Login here</Link>
        </p>
      </div>
      <div>
        <p className='leading-tight text-sm ' >This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className='text-blue-600 '>Privacy Policy</a> and <a href="https://policies.google.com/terms" className='text-blue-600 '>Terms of Service</a> apply. 
        </p>
      </div>
    </div>
  )
}

export default CaptainSignUp
