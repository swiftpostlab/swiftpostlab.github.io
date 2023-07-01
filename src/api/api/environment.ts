export const environmentsDict = {
  LOCAL: 'local',
  TEST: 'test',
  STAGING: 'staging',
  PROD: 'production',
} as const

type Environment = keyof typeof environmentsDict
type EnvironmentValue = typeof environmentsDict[Environment]

export const getCurrentEnv = (): EnvironmentValue => 
  process?.env?.NEXT_PUBLIC_ENV as EnvironmentValue ?? environmentsDict.TEST

export const isEnv = (env: EnvironmentValue): boolean => 
  getCurrentEnv() === env

export const isDevelopment = () => {
  const env = getCurrentEnv()
  return env !== environmentsDict.PROD && env !== environmentsDict.STAGING
}