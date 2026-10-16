
import { useState } from 'react'
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

function CreatePostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPost),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to create post')
      }

      return response.json()
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      })

      setMessage(`Post created successfully! ID: ${data.id}`)
      setErrorMessage('')
      setTitle('')
      setBody('')
      alert('Post created successfully!')
    },

    onError: () => {
      setErrorMessage('Failed to create post. Please try again.')
      setMessage('')
    },
  })

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setErrorMessage('')

    mutation.mutate({
      title: title,
      body: body,
      userId: 1,
    })
  }

  return (
    <section className="post-form">
      <h2>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          placeholder="Write your post here"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows={4}
          required
        />

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {message && <p className="success-message">{message}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  )
}

export default CreatePostForm
