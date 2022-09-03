import React, { useEffect } from 'react'
import axios from 'axios'

// axios.post
export function App() {
  useEffect(async () => {
    const { data } = await axios.get('http://localhost:3000/courses')
    console.log(data)
  }, [])

  createCourse = async () => {
    await axios.post('http://localhost:3000/createCourse', { name: 'cis197', instructor: 'peter chen' })
  }

  return (
  <>
  <h1>Hello world!</h1>
  <button onClick={() => createCourse()}/>
  </>
  )
}