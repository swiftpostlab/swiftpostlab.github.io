import React, { useEffect, useState } from 'react'
import { authApi } from '../api/authApi'
import { SessionContext } from '../contexts/SessionContext'

const getTokenCookie = (): string | null => {
  const COOKIE_NAME = 'token='
  const tokenList = document.cookie.split(';').filter(cookie => cookie.trim().startsWith(COOKIE_NAME))
  if (tokenList.length === 0) {
    return null
  }

  return tokenList[0].split(COOKIE_NAME)[1]
}

const setTokenCookie = (token: string | null) => {
  document.cookie = `token=${token}; Secure`
}


const SessionProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [token, setToken] = useState<string|null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cookieToken = getTokenCookie()
    if (cookieToken != null) {
      setToken(cookieToken)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (token != null) {
      setTokenCookie(token)
    }
  }, [token])

  const login = async (usernameOrEmail: string, password: string) => {
    // Authenticate
    const resp = await authApi.postLogin(usernameOrEmail, password)

    if (resp.isError) {
      // Send to Log-in
      return false
    }

    setToken(resp.data.access_token)
    return true
  }

  const renewToken = async () => { await console.log('Not implemented yet'); return false }
  const isActive = () => token != null
  const logout = () => setToken(null)

  return (
    <SessionContext.Provider value={{ token, loading, login, renewToken, isActive, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider