import React from 'react'
import { useContext } from 'react'
import { App3Context } from '../App3'
const Home = () => {
  const {username}=useContext(App3Context);
  return (
    <div>This is home page of {username}</div>
  )
}

export default Home