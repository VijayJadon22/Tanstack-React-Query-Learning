import React from 'react'
import { useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

const createTodo = async (text) => {
  const response = await fetch('http://localhost:8000/todo/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: text }),
  })

  if (!response.ok) {
    throw new Error('Failed to create todo')
  }

  return response.json()
}

const Form = () => {
  const [text, setText] = useState('')

  const queryClient = useQueryClient()

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: (newText) => createTodo(newText),
    onSuccess: () => {
      console.log('Success')
      queryClient.invalidateQueries({ queryKey: ['todo'] })
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
      <button onClick={(e) => mutate(text)}>Create Todo</button>
    </div>
  )
}

export default Form
