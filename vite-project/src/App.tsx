import { useState, userEffect } from 'react'

interface User {
  id: number,
  username : string
}

const App = () => {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  userEffect(() => {
    console.log('mouniting')
    console.log('User:',users)

    return () => console.log('unmounting')
  },[users])

  return (
    <div className="App">

    </div>
  )
}

export default App