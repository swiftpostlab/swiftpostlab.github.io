
import { Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { SessionContext } from '../src/auth/contexts/SessionContext'
import BaseLayout from '../src/layouts/BaseLayout'
import { pages } from '../src/routes/routes'


const Login: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoginCompleted, setIsSignUpCompleted] = useState(false)
  const router = useRouter()
  const session = useContext(SessionContext)

  useEffect(() => {
    if (session.isActive()){
      router.replace(pages.home)
    } 
  }, [])

  useEffect(() => {
    setError('')
  }, [password])

  useEffect(() => {
    if (isLoginCompleted) {
      setTimeout(() => router.push(pages.home), 5000)
    }
  }, [isLoginCompleted])

  const handleLoginClick = async () => {
    setError('')
    const isAuthSuccess = await session.login(usernameOrEmail.trim(), password.trim())
    if (!isAuthSuccess) {
      setError('Something went wrong, try again later.')
      return
    }

    setError('')
    setIsSignUpCompleted(true)
  }
  

  return (
    <BaseLayout>
      <Stack 
        direction="column" 
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        height="100%"
      >
        {
          isLoginCompleted ? (
            <>
              <Typography variant="h1">Login completed!</Typography>
              <Typography variant="subtitle1">
                {'Thank you. You\'re being redirected '}<Link href={pages.home}>home</Link>.
              </Typography>
            </>
          )
            : (
              <>
                <Typography variant="h1">Login</Typography>
                <Typography variant="subtitle1">Please, fill up your data</Typography>
                <Stack direction="column" justifyContent="center" spacing="2rem" paddingTop="2rem">
                  <TextField
                    required
                    label="Username or Email"
                    value={usernameOrEmail}
                    onChange={e => setUsernameOrEmail(e.target.value)}
                  />
                  <TextField
                    required
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  {error.length > 0 && 
                    <Typography variant="body1" color="error">
                      {error}
                    </Typography>
                  }
                  <Button variant="contained" onClick={handleLoginClick}>Login</Button>
                </Stack>
              </>
            )
        }
        
      </Stack>
    </BaseLayout>
  )
}
  
export default Login

