import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 
  useLoaderData()

  const [username, setUsername] = useState('')
  const [data, setData] = useState(null)   
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim()) return

    setLoading(true)
    setError(null)
    setData(null)

    try {
      const res = await fetch(`https://api.github.com/users/${username}`)
      if (!res.ok) throw new Error('User not found')
      const result = await res.json()
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="text-center m-4">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="text-black px-2 py-1 rounded"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-1 bg-blue-500 rounded text-white text-xl"
          >
            Search
          </button>
        </form>
      </div>

      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-400">{error}</div>}

        {data && (
          <div>
            <div>GitHub followers: {data.followers}</div>
            <div>
              <img
                src={data.avatar_url}
                width={300}
                alt="GitHub avatar"
                className="mx-auto mt-4 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Github


export const githubInfoLoader = async () => {
  return null
}
