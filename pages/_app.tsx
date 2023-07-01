import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import SessionProvider from '../src/auth/components/SessionProvider'
import theme from '../src/theming/theme'


export default function App({ Component, pageProps }: AppProps) {
  console.log(`Current environment: ${process.env.NEXT_PUBLIC_CUSTOM_ENV}`)
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}
