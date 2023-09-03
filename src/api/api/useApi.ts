import { useCallback, useContext } from 'react'
import { SessionContext } from '../../auth/contexts/SessionContext'
import { get, post } from './api'

export const useApi = () => {
  const session = useContext(SessionContext)
  const token = session.token
  const authHeader = token != null ? {
    Authorization: `Bearer ${token}`,
  } : null

  const _get: typeof get = useCallback(async (url, headers) => get(url, { ...authHeader, ...headers }), [token])
  const _post: typeof post = useCallback(async (url, content, headers) => post(url, content, { ...authHeader, ...headers }), [token])

  return {
    loading: session.loading,
    get: _get,
    post: _post,
  }
}