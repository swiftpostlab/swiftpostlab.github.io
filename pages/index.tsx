
import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import BaseLayout from '../src/layouts/BaseLayout'


const Index: React.FC = () => (
  <BaseLayout>
    <Stack 
      className="bob"
      direction="column" 
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
      height="100%"
    >
      <Typography variant="h1">Fast Forward</Typography>
      <Typography variant="subtitle1">Quick website creation</Typography>
      <Stack direction="row" justifyContent="center" spacing="2rem" paddingTop="2rem">
        <Button variant='contained'>Sign Up</Button>
        <Button variant='outlined'>Log In</Button>
      </Stack></Stack>
  </BaseLayout>
)
export default Index

