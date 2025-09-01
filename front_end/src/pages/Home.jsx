import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
        <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber_Logo" />
        <div className="bg-white pb-7 py-3 px-3">
          <h2 className='text-3xl font-bold'>Get Started</h2>
          <Link to="/userLogin" className="w-full flex item-center justify-center bg-black text-white py-3 rounded mt-5">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
