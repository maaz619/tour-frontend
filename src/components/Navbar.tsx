import { Link } from "gatsby"
import React from "react"

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className="flex w-full h-16 bg-teal-600">
        <div className=" py-2 px-16 w-full flex items-center justify-between">
          <Link to="/">
            <h1 className="text-white">Tour</h1>
          </Link>
          <div className="flex">
            <h3 className=" px-2 text-white">
              <Link to="/Login">Login</Link>
            </h3>
            <h3 className=" text-white">
              <Link to="/Profile">Profile</Link>
            </h3>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
