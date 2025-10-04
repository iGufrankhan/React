import React from 'react'
import { useParams } from "react-router-dom"

function User() {
  const { Userid } = useParams()
  return (
    <>                                                                                       
    <div className='bg-orange-500 text-black text-3xl text-center py-5'>User: {Userid}</div>
     <div>
           <h1>Username</h1>
           <input type="text" placeholder="username" />

     </div>
      </>
  )
}

export default User