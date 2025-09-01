import React from 'react'
import { Link } from 'react-router-dom'

function UserSignUp() {
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
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>

        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber_Logo" />
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <h3 className="text-lg font-base mb-2">What's your name</h3>
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
          <h3 className="text-base font-medium mb-2">Enter email:</h3>

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
        <p className='text-center'>Already have account? <Link to={'/userLogin'} className='text-blue-600 '>Login here</Link>
        </p>
      </div>
      <div>
        <p className='text-center text-sm text-gray-500 leading-tight'>By signing up, you agree to the <span className='text-black font-medium'>Terms of Service</span> and <span className='text-black font-medium'>Privacy Policy</span>, including <span className='text-black font-medium'>Cookie Use</span>.</p>
      </div>
    </div>
  )
}

export default UserSignUp
