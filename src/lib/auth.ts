export interface SignUpPayload {
  fullName: string
  email: string
  phoneNmber: string
  password: string
}

export async function signUpApi(values: SignUpPayload) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Failed to create user")
  }

  return response.json()
}
