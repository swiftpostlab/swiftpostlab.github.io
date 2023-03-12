import { createContext } from 'react'

const defaultContext = {
  token: null,
  isActive: () => { console.log('Not within the SessionContext'); return false },
  renewToken: async () => { console.log('Not within the SessionContext'); return false },
  login: async (_username: string, _password: string) => { console.log('Not within the SessionContext'); return false },
}

interface SessionContextType {
  token: string | null
  isActive: () => boolean
  renewToken: () => Promise<boolean>
  login: (username: string, password: string) => Promise<boolean>
}

export const SessionContext = createContext<SessionContextType>(defaultContext)