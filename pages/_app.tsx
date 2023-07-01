import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { getCurrentEnv, isDevelopment } from '../src/api/api/environment'
import SessionProvider from '../src/auth/components/SessionProvider'
import theme from '../src/theming/theme'


export default function App({ Component, pageProps }: AppProps) {
  if (isDevelopment()) {
    console.log(`Current environment: ${getCurrentEnv()}`)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}
