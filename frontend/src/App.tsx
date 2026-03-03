import React, { useState } from 'react'

const itemsData = [
  { id: 1, learner_id: 101, item_id: 201, kind: 'view', description: 'Просмотр урока', created_at: '2025-03-03T10:00:00Z' },
  { id: 2, learner_id: 102, item_id: 202, kind: 'attempt', description: 'Попытка решения', created_at: '2025-03-03T11:30:00Z' },
  { id: 3, learner_id: 103, item_id: 203, kind: 'complete', description: 'Завершено успешно', created_at: '2025-03-03T12:15:00Z' }
]

function App() {
  const [token, setToken] = useState('')

  if (!token) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Вход</h1>
        <input
          value={token}
          onChange={e => setToken(e.target.value)}
          placeholder="Введите любой токен"
        />
        <button onClick={() => setToken('connected')}>Connect</button>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Items</h1>
      <button onClick={() => setToken('')}>Disconnect</button>
      <table border={1} cellPadding={5} style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Learner ID</th>
            <th>Item ID</th>
            <th>Kind</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {itemsData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.learner_id}</td>
              <td>{item.item_id}</td>
              <td>{item.kind}</td>
              <td>{item.description}</td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
