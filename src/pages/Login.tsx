import Navbar from "../components/Navbar"
import React from "react"
import { _logIn } from "../services/service"
import { LoginType } from "../type.index"
import { navigate } from "gatsby"

const Login: React.FC = () => {
  const [credential, setCredential] = React.useState<LoginType>({
    email: "",
    password: "",
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let current = credential
    current[e.currentTarget.name] = e.currentTarget.value
    setCredential({ ...current })
  }
  const handleSubmit = async () => {
    try {
      let payLoad = {
        email: credential.email,
        password: credential.password,
      }
      let res = await _logIn(payLoad)
      let data = res
      console.log(data)
      if (data.token && data.status === "success")
        navigate("/", { replace: true })
      console.log(data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="w-full h-full pt-4 flex items-center justify-center">
        <form
          action="submit"
          onSubmit={e => {
            handleSubmit()
            e.preventDefault()
          }}
          className="w-full max-w-sm"
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block w-0 text-gray-500 font-bold md:text-start mb-1 md:mb-0"
                htmlFor="email"
                id="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                value={credential.email}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-start mb-1 md:mb-0"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={handleChange}
                value={credential.password}
                type="password"
                name="password"
                id="password"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="******************"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}
export default Login
