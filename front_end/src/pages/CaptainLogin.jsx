import React from 'react'
import { Link } from 'react-router-dom'
function CaptainLogin() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [captainData, setCaptainData] = React.useState({})

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // const newUser = { userEmail :email, UserPassword :password}
    // setUserData([...userData, newUser])
    setCaptainData({ userEmail: email, UserPassword: password })
    setEmail('')
    setPassword('')
    // console.log(userData)  // this will print the correct data
  }


  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>

        <Link to="/">
        <img className="w-20 mb-3" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber_Logo" />
        </Link>
        <form onSubmit={(e) => onSubmitHandler(e)}>

          <h3 className="text-lg font-medium mb-2">What's Your email:</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" type="submit">Captain Login</button>

        </form>
        <p className='text-center'>Join a fleet?  <Link to={'/captainSignUp'} className='text-blue-600 '>Register Captain  </Link>
        </p>
      </div>
      <div>
        <Link to={'/userLogin'} 
        className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign up User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
