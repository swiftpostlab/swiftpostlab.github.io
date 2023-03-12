
import { Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { post } from '../src/api/api'
import { BASE_URL } from '../src/api/constants'
import BaseLayout from '../src/layouts/BaseLayout'
import { pages } from '../src/routes/routes'
import { SessionContext } from '../src/session/contexts/SessionContext'


const Signup: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [isSignUpCompleted, setIsSignUpCompleted] = useState(false)
  const router = useRouter()
  const session = useContext(SessionContext)

  useEffect(() => {
    if (session.isActive()){
      router.replace(pages.home)
    } }, [])

  useEffect(() => {
    setError('')
  }, [password, confirmPassword])

  useEffect(() => {
    if (isSignUpCompleted) {
      setTimeout(() => router.push(pages.home), 5000)
    }
  }, [isSignUpCompleted])

  const handleSignUpClick = async () => {
    if (password.length < 8) {
      setError('Password too short')
      return
    }

    if (password !== confirmPassword) {
      setError('Password confirmation not matching')
      return
    }

    const resp = await post(
      `${BASE_URL}/auth/signup`,
      {
        username,
        password,
      }
    )

    if (resp.isError) {
      console.log('SignUp error')
      setError('Could not sign in. Try again later.')
      return
    }
    
    handleSignUpSuccess()
  }

  const handleSignUpSuccess = async () => {
    setError('')
    const isAuthSuccess = await session.login(username, password)
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
          isSignUpCompleted ? (
            <>
              <Typography variant="h1">Sign up completed!</Typography>
              <Typography variant="subtitle1">
                Thank you. You're being redirected{' '}<Link href={'/'}>home</Link>.
              </Typography>
            </>
          )
            : (
              <>
                <Typography variant="h1">Sign up</Typography>
                <Typography variant="subtitle1">Please, fill up your data</Typography>
                <Stack direction="column" justifyContent="center" spacing="2rem" paddingTop="2rem">
                  <TextField
                    required
                    label="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <TextField
                    required
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <TextField
                    required
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  {error.length > 0 && 
                    <Typography variant="body1" color="error">
                      {error}
                    </Typography>
                  }
                  <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
                </Stack>
              </>
            )
        }
        
      </Stack>
    </BaseLayout>
  )
}
  
export default Signup

