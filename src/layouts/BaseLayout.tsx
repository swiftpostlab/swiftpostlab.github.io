import { Stack } from '@mui/material'
import Head from 'next/head'
import React from 'react'


interface Props {
  children?: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>SwiftPost</title>
        <meta name="description" content="Swift web generation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Stack minHeight='100vh' minWidth='100%'>
          <Stack 
            maxWidth="1200px"
            paddingBottom="2.5rem"
            paddingTop="1rem"
            paddingX="0.5rem"
            flexGrow={1} 
            
            sx={(theme) => ({
              [theme.breakpoints.up('md')]: {
                marginX: 'auto',
              },
            })}
          >
            {children}
          </Stack>
        </Stack>
      </main>
    </>
  )
}

export default BaseLayout