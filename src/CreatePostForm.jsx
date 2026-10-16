
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

function CreatePostForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
      setSuccessMessage(
        `Post created successfully! Post ID: ${data.id}`
      )
      setErrorMessage('')
      setTitle('')
      setBody('')
      alert('Post created successfully!')
    },

    onError: () => {
      setErrorMessage(
        'Failed to create post. Please try again.'
      )
      setSuccessMessage('')
    },
  })

  const { isPending } = mutation

  function handleSubmit(event) {
    event.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')

    mutation.mutate({
      title: title,
      body: body,
      userId: 1,
    })
  }

  return (
    <div className="post-form">
      <h2>Create Post</h2>

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
          rows={5}
          required
        />

        <button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  )
}

export default CreatePostForm
