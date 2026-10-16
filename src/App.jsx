
import TodoList from './TodoList'
import ModernDashboard from './ModernDashboard'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Day 42: Week 10 Integration</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '20px',
        }}
      >
        <section>
          <TodoList />
        </section>

        <section>
          <ModernDashboard />
        </section>
      </div>
    </div>
  )
}

export default App