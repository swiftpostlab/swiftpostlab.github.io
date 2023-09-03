import { createContext } from 'react'

interface SessionContextType {
  token: string | null
  loading: boolean
  isActive: () => boolean
  renewToken: () => Promise<boolean>
  login: (usernameOrEmail: string, password: string) => Promise<boolean>
  logout: () => void
}

const defaultContext: SessionContextType = {
  token: null,
  loading: true,
  isActive: () => { console.log('Not within the SessionContext'); return false },
  renewToken: async () => { console.log('Not within the SessionContext'); return false },
  login: async (_username: string, _password: string) => { console.log('Not within the SessionContext'); return false },
  logout: () => console.log('Not within the SessionContext'),
}

export const SessionContext = createContext<SessionContextType>(defaultContext)