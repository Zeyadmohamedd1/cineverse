const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN

export async function getTrending() {
  const response = await fetch(
    `${BASE_URL}/trending/all/week?language=en-US`,
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
      }
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch trending movies')
  }

  return await response.json()
}