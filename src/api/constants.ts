const API_LOCAL = 'http://localhost:3001'
export const BASE_URL = process.env.NODE_ENV === "development" ? API_LOCAL : process.env.API_URL_TEST
