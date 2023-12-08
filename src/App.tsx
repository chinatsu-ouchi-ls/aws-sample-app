import { useState } from 'react'
import './App.css'

export const App = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([])
  const API_INVOKE_URL = 'https://pikatore-sample-node-c71472009df3.herokuapp.com/users'

  const callApi = async () => {
    await fetch(API_INVOKE_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json()) // レスポンスをJSONに変換する
      .then((data) => {
        setUsers(data) // データをstateにセットする
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='App'>
      <button onClick={callApi}>click here!</button>
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}
