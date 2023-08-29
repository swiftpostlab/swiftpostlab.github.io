export const API_URL = process.env.NEXT_PUBLIC_API_URL

type Headers = Record<string, string>

interface GoodResponse<DataT> {
  resp: Awaited<ReturnType<typeof fetch>>
  data: DataT,
  isError: false
}

interface BadResponse<DataT> {
  resp: Awaited<ReturnType<typeof fetch>>
  data?: DataT | null,
  isError: true
}

export type Response<DataT> = GoodResponse<DataT> | BadResponse<DataT>

export const request = async <ResponseDataT = unknown, >(
  url: string, 
  type: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  options?: {
    headers?: Headers, 
    body?: string
  }
): Promise<Response<ResponseDataT>> => {
  const resp = await fetch(url, {
    method: type,
    mode: 'cors',
    headers: options?.headers,
    body: options?.body,
  })

  if (!resp.ok) {
    return { resp, data: null, isError: true }
  }
  
  const contentType = resp.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return { resp, data: await resp.json(), isError: false }
  }

  return { resp, data: null as unknown as ResponseDataT, isError: false }
}

export const post = async <BodyT = unknown, ResponseT = unknown,>(url: string, content: BodyT, headers: Headers | null = null): Promise<Response<ResponseT>> => {
  return await request(
    url,
    'POST',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(content),
    }
  )
}

export const get = async <ResponseT = unknown,>(url: string, headers: Headers | null = null): Promise<Response<ResponseT>> => {
  return await request(
    url,
    'GET',
    {
      headers: {
        ...headers
      }
    }
  )
}