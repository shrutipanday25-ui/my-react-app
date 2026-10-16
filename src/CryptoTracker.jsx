
import { useQuery } from '@tanstack/react-query'

const fetchBitcoinPrice = async () => {
  const response = await fetch(
    'https://api.coindesk.com/v1/bpi/currentprice.json'
  )

  if (!response.ok) {
    throw new Error('Failed to fetch Bitcoin price')
  }

  const data = await response.json()

  return {
    price: data.bpi.USD.rate_float,
    updatedAt: data.time.updated,
  }
}

function CryptoTracker() {
  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['bitcoin-price'],
    queryFn: fetchBitcoinPrice,
    refetchInterval: 10000,
    refetchIntervalInBackground: false,
  })

  if (isPending) {
    return <p>Loading Bitcoin price...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h2>₿ Live Bitcoin Tracker</h2>

      <h3>
        ${data.price.toLocaleString('en-US', {
          maximumFractionDigits: 2,
        })}
      </h3>

      <p>Currency: USD</p>
      <p>Last updated: {data.updatedAt}</p>

      <p>
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: isFetching ? 'orange' : 'green',
            marginRight: '8px',
          }}
        />
        {isFetching ? 'Updating price...' : 'Price loaded'}
      </p>

      <p>Price automatically refreshes every 10 seconds.</p>
    </div>
  )
}

export default CryptoTracker
