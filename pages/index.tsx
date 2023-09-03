
import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { SessionContext } from '../src/auth/contexts/SessionContext'
import BaseLayout from '../src/layouts/BaseLayout'
import { pages } from '../src/routes/routes'


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
        <Stack direction="row" justifyContent="center" spacing="2rem" paddingTop="2rem">
          {session.isActive() ? 
            (
              <>
                <Button variant="contained" onClick={() => router.push(pages.projects)}>Projects</Button>
                <Button onClick={session.logout}>Log Out</Button>
              </>
            ) : (
              <>
                <Button variant="contained" onClick={() => router.push(pages.signup)}>Sign Up</Button>
                <Button variant="outlined" onClick={() => router.push(pages.login)}>Log In</Button>
              </>
            )}
        </Stack>
        
      </Stack>
    </BaseLayout>
  )
}

export default Index

