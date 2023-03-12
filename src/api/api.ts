

export const request = async (
  url: string, 
  type: 'GET' | 'POST' = 'GET', 
  options?: {
    headers?: Record<string, string>, 
    body?: string
  }
) => {
  return await fetch(url, {
    method: type,
    mode: 'cors',
    headers: options?.headers,
    body: options?.body,
  })
}

interface Response<DataT> {
  data: DataT | null,
  isError: boolean
}

export const post = async <BodyT = unknown, ResponseT = unknown,>(url: string, content: BodyT): Promise<Response<ResponseT>> => {
  const resp = await request(
    url,
    'POST',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    }
  )

  if (!resp.ok) {
    console.warn(resp.status)
    return { data: null, isError: true }
  }
  
  const contentType = resp.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return { data: await resp.json(), isError: false }
  }

  return { data: null, isError: false }
}