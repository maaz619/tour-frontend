import { LoginType } from "../type.index"
const BASE_URL: string = `http://localhost:9000/api/v1`
export const TOUR_URL: string = `${BASE_URL}/tours`
export const LOGIN_URL: string = `${BASE_URL}/users/login`
export const LOGOUT_URL: string = `${BASE_URL}/users/logout`
export const PROFILE_URL: string = `${BASE_URL}/users/me`

const _getOneTour = async (id: number) => {
  let res = await fetch(`${TOUR_URL}/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json, application/text",
    },
  })
  let data = res.json()
  return data
}

const _logIn = async (_data: LoginType) => {
  let res = await fetch(`${LOGIN_URL}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(_data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res.json()
}

const _getProfile = async () => {
  try {
    let res = await fetch(PROFILE_URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    return data
  } catch (err) {
    return err
  }
}
const _logOut = async () => {
  return await fetch(`${LOGOUT_URL}`, {
    method: "POST",
  })
}
export { _getProfile, _getOneTour, _logIn, _logOut }
