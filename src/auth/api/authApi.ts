import { API_URL, get, post, Response } from "../../api/api/api"

const getVerification = async (verificationToken: string) => 
  await get<void>(
    `${API_URL}/auth/verify/${verificationToken}`
  )

  interface PostLoginRequest {
    username: string,
    password: string
  }
  
  interface PostLoginResponse {
    access_token: string
  }
  
  const postLogin = async (usernameOrEmail: string, password: string): Promise<Response<PostLoginResponse>> => {
    return await post<PostLoginRequest, PostLoginResponse>(
      `${API_URL}/auth/login`,
      {
        username: usernameOrEmail,
        password,
      }
    )
  }

  interface PostSignUpRequest {
    username: string,
    password: string,
    email: string,
  }

  const postSignUp = async (username: string, email: string, password: string): Promise<Response<void>> => {
    return await post<PostSignUpRequest, void>(
      `${API_URL}/auth/signup`,
      {
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
      }
    )
  }

export const authApi = {
  getVerification,
  postLogin,
  postSignUp,
}