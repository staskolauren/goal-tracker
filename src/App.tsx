import { useState } from 'react'
import { Table } from './Table'
import './App.css'

function App() {
  const [name, setName] = useState("unknown");

  return (
    <>
      <Table />
    </>
  )
}

export default App
