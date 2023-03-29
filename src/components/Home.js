import React from 'react'
import { useContext } from 'react'
import { App3Context } from '../App3'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const Home = () => {
  const {username}=useContext(App3Context);
  const {data}=useQuery(["cat"],()=>{
     return axios.get("https://catfact.ninja/fact").then(res =>res.data)
  })
  return (
    <div>This is home page of {username}
    <p>{data?.fact}</p></div>
  )
}

export default Home