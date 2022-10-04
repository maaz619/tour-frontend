import { Link, navigate } from "gatsby"
import React from "react"
import { _getProfile, _logOut } from "../services/service"
import Cookies from "universal-cookie"

const Navbar: React.FC = (): JSX.Element => {
  const [isLogged, setLogged] = React.useState<boolean>(false)
  const logOut = async () => {
    const cookies = new Cookies()
    cookies.remove("jwt")
    await _logOut()
    setLogged(false)
    navigate("/Login", { replace: true })
  }
  React.useEffect(() => {
    ;(async () => {
      let res = await _getProfile()
      if (res.status === "success") setLogged(true)
    })()
  }, [])
  return (
    <>
      <nav className="flex w-full h-16 ">
        <div className=" py-2 px-16 bg-[#ec4899] w-full flex items-center justify-between">
          <Link to="/" replace={true}>
            <h1 className="text-white">Tour</h1>
          </Link>
          <div className="flex">
            <p className=" text-md font-semibold text-white">
              <Link to="/Profile">Profile</Link>
            </p>
            {isLogged ? (
              <p
                onClick={logOut}
                className=" text-md font-semibold px-2 text-white"
              >
                Logout
              </p>
            ) : (
              <p className=" text-md font-semibold px-2 text-white">
                <Link to="/Login">Login</Link>
              </p>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
