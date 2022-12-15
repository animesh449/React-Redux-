import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store';
import { useSelector } from 'react-redux';
import Skeleton from './Skeleton';

function UsersList() {
  const {isLoading,data,error}= useSelector((state)=>state.users);

  const dispatch= useDispatch();
  useEffect(()=>{
        dispatch(fetchUsers());
  },[dispatch])
    if(isLoading){
         return <Skeleton times={6} className='h-10 w-full'></Skeleton>
    }
    if(error){
      return <div>Error Loading Data</div>
    }
   const renderedUser=data.map((user)=>{
    return(
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-center items-start cursor-pointer">
          {user.name}
        </div>
      </div>
    )
   })
   return <div>{renderedUser}</div>
  
}

export default UsersList