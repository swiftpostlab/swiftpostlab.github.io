
import { Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { post } from '../src/api/api'
import { BASE_URL } from '../src/api/constants'
import BaseLayout from '../src/layouts/BaseLayout'


const Signup: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    setError('')
  }, [password, confirmPassword])

  const handleSignUp = async () => {
    if (password.length < 8) {
      setError("Password too short")
      return
    }

    if (password !== confirmPassword) {
      setError("Password confirmation not matching")
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
      console.log("Error")
      return
    }

    
    console.log('Success')
    console.log(resp)
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
            <Typography variant="body1" color="error" >{error}</Typography>
          }
          <Button variant='contained' onClick={handleSignUp}>Sign Up</Button>
        </Stack>
      </Stack>
    </BaseLayout>
  )
}
  
export default Signup

