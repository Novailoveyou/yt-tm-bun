import React from 'react'
import { createRoot } from 'react-dom'

const root = createRoot(document.getElementById('root'))

const App = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(prevState => prevState + 1)

  return (
    <div>
      <h1>Hello World</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

root.render(<App />)
