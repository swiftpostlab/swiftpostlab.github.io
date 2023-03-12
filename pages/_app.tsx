import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import SessionProvider from '../src/session/components/SessionProvider'
import theme from '../src/theming/theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}
