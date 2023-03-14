
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { goToLoginPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../contexts/GlobalContext'

export default function HomePage() {
  /*
  const context = useContext(GlobalContext)
  const navigate = useNavigate()

  const [ posts, setPosts] = useState([])

  useEffect(() => {
    if (!context.isAuth) {
        goToLoginPage(navigate)
    }
}, [])

useEffect(() => {
  fetchPosts()
}, [])

const fetchPosts = async () => {
  try {
      const config = {
        
          headers: {
              Authorization: window.localStorage.getItem("post-token")
              
          }
      }
    
      const response = await axios.get(`${BASE_URL}/post`, config)

      console.log("POSSSTS",response)
      setPosts(response.data)
  } catch (error) {
      console.log(error)
  }
}
*/
  return (
    <>
      <h1>HomePage</h1>
    </>
  );
}
