import React, { useState } from 'react'
import { post } from '../../api/api'
import { BASE_URL } from '../../api/constants'
import { SessionContext } from "../contexts/SessionContext"


const SessionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [token, setToken] = useState<string|null>(null)

  const login = async (username: string, password: string) => {
    // Authenticate
    const resp = await post<unknown, {access_token: string}>(
      `${BASE_URL}/auth/login`,
      {
        username,
        password,
      }
    )

    if (resp.isError) {
      console.log("Auth error")
      // Send to Log-in
      return false
    }

    console.log(resp.data?.access_token)
    setToken(resp.data?.access_token ?? null)

    return true
  }

  const renewToken = async () => { console.log('Not implemented yet'); return false }

  return (
    <SessionContext.Provider value={{ token, login, renewToken }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider