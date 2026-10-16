
import { useTodos } from './useTodos'

function ModernDashboard() {
  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
  } = useTodos()

  if (isPending) return <p>Loading todos...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Modern Dashboard</h2>

      {isFetching && <p>Updating todos...</p>}

      {data.map((todo) => (
        <p key={todo.id}>
          {todo.id}. {todo.title}
        </p>
      ))}
    </div>
  )
}

export default ModernDashboard