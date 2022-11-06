import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUserAction } from '../redux/User/user.action'

const User = () => {

  let dispatch = useDispatch()
  let users = useSelector((state) => {
    return state
  })
  useEffect(() => {
    dispatch(fetchUserAction())
  }, [])
  return <>
    <div className="container">
      <h1>User component</h1>
      <div className="col-6">
         <pre>{JSON.stringify(users)}</pre> 
        <table className='table table-dark'>
          <thead className='bg-dark text-white'>
            <tr>
            <th>Name</th>
            <th>id</th>
            <th>Username</th>
            <th>Email</th></tr>
          </thead>
          <tbody>
{
 Object.keys(users).length>0?<>
   {
    users.users.map((user)=>{
        return <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
    })
  } 
  </>:null
  }

              
          </tbody>
        </table>

      </div>
    </div>


  </>

}

export default User