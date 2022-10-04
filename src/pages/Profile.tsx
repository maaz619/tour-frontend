import Navbar from "../components/Navbar"
import React from "react"
import { PROFILE_URL } from "../services/service"
import { User } from "../type.index"

const Profile = () => {
  const [user, setUser] = React.useState<User>()
  // const [token, setToken] = React.useState<string>()
  React.useEffect(() => {
    const getProfile = async () => {
      try {
        let res = await fetch(PROFILE_URL, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await res.json()
        console.log(data)
        setUser(data.data.doc)
      } catch (err) {
        console.log(err.message)
      }
    }
    getProfile()
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <div className=" px-6 pt-4">
        <h3>Name:{user?.name}</h3>
        <h3>Email:{user?.email}</h3>
        <h3>Role:{user?.role}</h3>
        <h3>Id:{user?._id}</h3>
      </div>
    </React.Fragment>
  )
}

export default Profile
