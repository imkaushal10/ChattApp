import React from 'react'
import Slidebar from '../components/Sidebar'
import Chats from '../components/Chats'

const Home = () => {
  return (
    <div>
        <div className="home">
            <div className='container'>
                <Slidebar/>
                <Chats/>
            </div>
        </div>
    </div>
  )
}

export default Home