

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

export const post = async <BodyT = unknown, ResponseT = unknown,>(url: string, content: BodyT): Promise<ResponseT | null> => {
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
    return null
  }

  return await resp.json()
}