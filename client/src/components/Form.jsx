import React from 'react'
import { useState } from 'react'

import { useMutation } from '@tanstack/react-query'

// const createTodo = async (text) => {
//   const response = await fetch('http://localhost:8000/todo/create', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ text }),
//   })

//   if (!response.ok) {
//     throw new Error('Failed to create todo')
//   }

//   return response.json()
//   //   return async () =>
//   //     await fetch('http://localhost:8000/todo/create', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ text }),
//   //     })
// }

const createTodo = async (text) => {
  const response = await fetch('http://localhost:8000/todo/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })

  if (!response.ok) {
    throw new Error('Failed to create todo')
  }

  return response.json()
}

const Form = () => {
  const [text, setText] = useState('')

  //   const todoMutation = useMutation(() => createTodo(text), {
  //     onSuccess: () => {
  //       console.log('Success')
  //     },
  //     onError: () => {
  //       console.log('Error')
  //     },
  //   })

  const todoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      console.log('Success')
    },
    onError: () => {
      console.log('Error')
    },
  })
  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={(e) => todoMutation.mutate}>Create Todo</button>
    </div>
  )
}

export default Form
