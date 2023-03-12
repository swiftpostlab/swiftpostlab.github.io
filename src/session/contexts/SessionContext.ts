import { createContext } from 'react'

const defaultContext = {
  token: null,
  renewToken: async () => { console.log('Not within the SessionContext'); return false },
  login: async (username: string, password: string) => { console.log('Not within the SessionContext'); return false },
}

interface SessionContextType {
  token: string | null
  renewToken: () => Promise<boolean>
  login: (username: string, password: string) => Promise<boolean>
}

export const SessionContext = createContext<SessionContextType>(defaultContext)