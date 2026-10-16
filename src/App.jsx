
import CryptoTracker from './CryptoTracker.jsx'

function App() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Day 41: Background Fetching & Polling</h1>

      <p>
        Track Bitcoin prices with automatic updates every 10 seconds.
      </p>

      <CryptoTracker />
    </div>
  )
}

export default App
