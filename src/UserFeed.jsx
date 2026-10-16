
import { useInfiniteQuery } from '@tanstack/react-query'

function UserFeed() {
  const {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['users'],
    initialPageParam: 1,

    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `https://randomuser.me/api/?results=10&page=${pageParam}`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }

      return response.json()
    },

    getNextPageParam: (lastPage) => {
      return lastPage.info.page + 1
    },
  })

  if (isLoading) {
    return <p className="status-message">Loading users...</p>
  }

  if (isError) {
    return <p className="error-message">Error: {error.message}</p>
  }

  return (
    <section className="user-feed">
      <h2>User Feed</h2>

      <div className="user-grid">
        {data.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="user-page">
            {page.results.map((user) => (
              <article
                className="user-card"
                key={user.login.uuid}
              >
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                />

                <h3>
                  {user.name.first} {user.name.last}
                </h3>

                <p>{user.email}</p>
                <p>
                  {user.location.city}, {user.location.country}
                </p>
              </article>
            ))}
          </div>
        ))}
      </div>

      <button
        className="load-more-button"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'No More Users'}
      </button>
    </section>
  )
}

export default UserFeed
