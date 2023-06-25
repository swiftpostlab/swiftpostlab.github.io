
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { get } from '../src/api/api'
import { API_URL } from '../src/api/constants'
import BaseLayout from '../src/layouts/BaseLayout'
import { pages } from '../src/routes/routes'
import { SessionContext } from '../src/session/contexts/SessionContext'

const verificationUrl = `${API_URL}/auth/verify`;


const Verify: React.FC = () => {
  const [isVerificationCompleted, setIsVerificationCompleted] = useState(false)
  const [isError, setIsError] = useState(false)
  const router = useRouter()
  const session = useContext(SessionContext)

  useEffect(() => {
    if (router.isReady) {
      console.log('Router:', router.query)
      const params = router.query.params
      const token = Array.isArray(params) ? params[0] : params
  
      if (token) {
        getVerification(token)
      }
    }
  }, [router.isReady])

  useEffect(() => {
    if (isVerificationCompleted) {
      setTimeout(() => router.push(pages.home), 5000)
    }
  }, [isVerificationCompleted])

  const getVerification = async (verificationToken: string) => {

    const resp = await get(
      `${verificationUrl}/${verificationToken}`
    )

    if (resp.isError) {
      setIsError(true)
      return
    }

    setIsVerificationCompleted(true)
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
          isError ? (
            <>
              <Typography variant="h1">Verification failed</Typography>
              <Typography variant="subtitle1">
                Verification failed
              </Typography>
            </>
          )
          : isVerificationCompleted ? (
            <>
              <Typography variant="h1">Verification succeded</Typography>
              <Typography variant="subtitle1">
                Thank you for verifying your email. You're being redirected{' '}<Link href={pages.home}>home</Link>.
              </Typography>
            </>
          )
            : (
              <>
                <Typography variant="h1">Confirm verification</Typography>
                <Typography variant="subtitle1">Please, wait a moment while we verify...</Typography>
              </>
            )
        }
        
      </Stack>
    </BaseLayout>
  )
}
  
export default Verify

