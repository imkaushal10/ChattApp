import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_960_720.jpg" alt="" />
        <div className="UserChatInfo">
          <span>Mary</span>
        </div>
      </div>
    </div>
  )
}

export default Search