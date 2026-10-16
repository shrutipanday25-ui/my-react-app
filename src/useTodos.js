
import { useQuery } from '@tanstack/react-query'

const fetchTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos'
  )

  if (!response.ok) {
    throw new Error('Failed to fetch todos')
  }

  const todos = await response.json()
  return todos.slice(0, 10)
}

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 2,
  })
}
