import React from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userData, setUserData] = React.useState({})

  const onSubmitHandler = (e) => {  
  e.preventDefault()
  // const newUser = { userEmail :email, UserPassword :password}
  // setUserData([...userData, newUser])
  setUserData({ userEmail :email, UserPassword :password})
  setEmail('')
  setPassword('')
  // console.log(userData)  // this will print the correct data
}


  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>

        <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber_Logo" />
        <form onSubmit={(e) => onSubmitHandler(e)}>

          <h3 className="text-lg font-medium mb-2">What's Your email:</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) =>{
              setEmail(e.target.value)
            }} />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required type="password"
            placeholder="Enter Password"
            value={password} 
            onChange={(e) =>{
              setPassword(e.target.value)
            }}/>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">User Login</button>

        </form>
        <p className='text-center'>New here? <Link to={'/userSignUp'} className='text-blue-600 '>Create New Account  </Link>
        </p>
      </div>
      <div>
        <Link to={'/captainLogin'} className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign up Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
