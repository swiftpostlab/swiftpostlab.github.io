
import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import BaseLayout from '../src/layouts/BaseLayout'
import { pages } from '../src/routes/routes'
import { SessionContext } from '../src/session/contexts/SessionContext'


const Index: React.FC = () => {
  const router = useRouter()
  const session = useContext(SessionContext)

  return (
    <BaseLayout>
      <Stack 
        direction="column" 
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        height="100%"
      >
        <Typography variant="h1">SwiftPost</Typography>
        <Typography variant="subtitle1">Swift web generation</Typography>
        {!session.isActive() && (
          <Stack direction="row" justifyContent="center" spacing="2rem" paddingTop="2rem">
            <Button variant='contained' onClick={() => router.push(pages.signup)}>Sign Up</Button>
            <Button variant='outlined'>Log In</Button>
          </Stack>
        )}
        
      </Stack>
    </BaseLayout>
  )
}

export default Index

