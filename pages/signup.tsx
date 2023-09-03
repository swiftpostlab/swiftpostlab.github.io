
import { Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { authApi } from '../src/auth/api/authApi'
import { SessionContext } from '../src/auth/contexts/SessionContext'
import BaseLayout from '../src/layouts/BaseLayout'
import { pages } from '../src/routes/routes'


const Signup: React.FC = () => {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [error, setError] = useState('')
  const [isSignUpCompleted, setIsSignUpCompleted] = useState(false)
  const router = useRouter()
  const session = useContext(SessionContext)

  useEffect(() => {
    if (session.isActive()){
      router.replace(pages.home)
    } }, [])

  useEffect(() => {
    setUsernameError('')
    setEmailError('')
    setPasswordError('')
    setConfirmPasswordError('')
    setError('')
  }, [password, confirmPassword])

  useEffect(() => {
    if (isSignUpCompleted) {
      setTimeout(() => router.push(pages.home), 5000)
    }
  }, [isSignUpCompleted])

  const handleSignUpClick = async () => {
    if (username.length < 3) {
      setUsernameError('Username too short')
      return
    }
    setUsernameError('')

    if (email.length < 6 || !email.includes('@') || !email.includes('.')) {
      setEmailError('Email format not valid')
      return
    }
    setEmailError('')

    if (password.length < 8) {
      setPasswordError('Password has less than 8 characters.')
      return
    }
    setPasswordError('')

    if (password !== confirmPassword) {
      setConfirmPasswordError('Password confirmation not matching')
      return
    }
    setConfirmPasswordError('')

    const resp = await authApi.postSignUp(
      username.trim(),
      email.trim(),
      password.trim(),
    )

    if (resp.isError) {
      console.log('SignUp error')
      setError('Could not sign up. Try again later.')
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
                Thank you. You're being redirected{' '}<Link href={pages.home}>home</Link>.
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
                    error={usernameError !== ''}
                    helperText={usernameError}
                    
                  />
                  <TextField
                    required
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={emailError !== ''}
                    helperText={emailError}
                  />
                  <TextField
                    required
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={passwordError !== ''}
                    helperText={passwordError}
                  />
                  <TextField
                    required
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    error={confirmPasswordError !== ''}
                    helperText={confirmPasswordError}
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

