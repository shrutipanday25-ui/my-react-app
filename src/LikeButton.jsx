
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

function LikeButton({ postId, initialLikeCount = 0 }) {
  const queryClient = useQueryClient()
  const queryKey = ['posts', postId]

  const [likeCount, setLikeCount] = useState(initialLikeCount)
  const [message, setMessage] = useState('')

  const mutation = useMutation({
    mutationFn: async () => {
      // Fake API request with a 50% chance of failure
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (Math.random() < 0.5) {
        throw new Error('Like request failed!')
      }

      return { success: true }
    },

    onMutate: async () => {
      setMessage('')

      await queryClient.cancelQueries({
        queryKey,
      })

      const previousPost = queryClient.getQueryData(queryKey)

      // Optimistically increase the count
      setLikeCount((count) => count + 1)

      queryClient.setQueryData(queryKey, (oldPost) => ({
        ...(oldPost || { id: postId, likes: initialLikeCount }),
        likes: (oldPost?.likes ?? initialLikeCount) + 1,
      }))

      return { previousPost }
    },

    onError: (error, variables, context) => {
      // Roll back the cached data
      if (context?.previousPost !== undefined) {
        queryClient.setQueryData(queryKey, context.previousPost)
      } else {
        queryClient.removeQueries({
          queryKey,
          exact: true,
        })
      }

      // Restore the visible count
      setLikeCount(initialLikeCount)
      setMessage(error.message)
    },

    onSuccess: () => {
      setMessage('Like successful!')
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      })
    },
  })

  function handleLike() {
    mutation.mutate()
  }

  return (
    <div className="like-container">
      <button
        className="like-button"
        onClick={handleLike}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Liking...' : '❤️ Like'} ({likeCount})
      </button>

      {message && (
        <p
          className={
            mutation.isError ? 'error-message' : 'success-message'
          }
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default LikeButton
