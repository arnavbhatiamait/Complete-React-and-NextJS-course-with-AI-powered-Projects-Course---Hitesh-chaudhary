export async function GET() {
    const response = await fetch("https://69ce152e33a09f831b7cddf2.mockapi.io/api/users/users")
    const data = await response.json()
    return Response.json(data)
}