import Navbar from "../components/Navbar"
import axios from "axios"
import React from "react"
import { profileUrl } from "../services/service"
import { User } from "../type.index"

const Profile = () => {
  const [user, setUser] = React.useState<User>()
  const [token, setToken] = React.useState<string>()
  const getProfile = async (token: string) => {
    try {
      let res = await axios.get(profileUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      let data = await res.data
      setUser({ ...data.data.doc })
    } catch (err) {
      console.log(err.message)
    }
  }
  React.useEffect(() => {
    const setter = setToken(localStorage.getItem("token"))
    const getter = getProfile(token)
    return () => {
      setter
      getter
    }
  }, [token])
  console.log(user)

  return (
    <React.Fragment>
      <Navbar />
      <div className=" px-6 pt-4">
        <h3>Name:{user?.name}</h3>
        <h3>Email:{user?.email}</h3>
        <h3>Role:{user?.role}</h3>
      </div>
    </React.Fragment>
  )
}

export default Profile
