import { useState } from 'react'
import './App.css'

export const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const API_INVOKE_URL = 'https://p6av0qjgsh.execute-api.ap-northeast-1.amazonaws.com/dev'

  const onSubmit = async () => {
    if (!firstName || !lastName) return
    await fetch(API_INVOKE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName }),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className='App'>
      <form>
        <label>First Name :</label>
        <input type='text' id='fName' onChange={(event) => setFirstName(event.target.value)} />
        <label>Last Name :</label>
        <input type='text' id='lName' onChange={(event) => setLastName(event.target.value)} />
        <button type='button' onClick={onSubmit}>
          Call API
        </button>
      </form>
    </div>
  )
}
