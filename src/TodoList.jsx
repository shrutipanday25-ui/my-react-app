
import { useEffect, useState } from 'react'

function TodoList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true)

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch todos')
        }

        const todos = await response.json()
        setData(todos.slice(0, 10))
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  if (loading) return <p>Loading todos...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Legacy Dashboard</h2>

      {data.map((todo) => (
        <p key={todo.id}>
          {todo.id}. {todo.title}
        </p>
      ))}
    </div>
  )
}

export default TodoList;