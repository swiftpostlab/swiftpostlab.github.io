const API_LOCAL_URL = 'http://localhost:3001'
const API_TEST_URL = 'https://shy-tan-meerkat-garb.cyclic.app'
export const BASE_URL = process.env.NODE_ENV === "development" ? API_LOCAL_URL : API_TEST_URL
