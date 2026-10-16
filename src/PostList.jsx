
import { useQuery } from '@tanstack/react-query'
import LikeButton from './LikeButton'

function PostList() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      )

      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }

      return response.json()
    },
  })

  if (isLoading) {
    return <p className="status-message">Loading posts...</p>
  }

  if (isError) {
    return <p className="error-message">Error: {error.message}</p>
  }

  return (
    <section className="posts-section">
      <h2>Posts List</h2>

      {posts.slice(0, 10).map((post) => (
        <article className="post-card" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>Post ID: {post.id}</small>

          <LikeButton
            postId={post.id}
            initialLikeCount={0}
          />
        </article>
      ))}
    </section>
  )
}

export default PostList
