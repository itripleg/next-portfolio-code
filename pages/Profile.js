import React from 'react'
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis';

const Profile = () => {
  const { user, logout } = useMoralis();

  return (
    <div className="h-screen bg-gray-900 p-20">
      {/*Auth message and logout button*/}
      <div className="container mx-auto flex gap-4 flex-col md:flex-row md:justify-between">
        <h1 className="text-green-300 pt-3 m-4 animate-pulse center">Succesfully authenticated. Welcome back, {user.username}</h1>
        <button className="h-12 text-lg text-black bg-red-700 rounded-md w-40"
          onClick={logout}>Logout</button>
      </div>
      <div className= "container mx-auto mr-20 mt-20 text-gray-400 bg-gray-600 mr-80">
        <h1 className="text-white text-xl">Profile</h1>
{/*        <p className="ml-20 ">Accounts: { user.attributes.accounts }</p>
        <p className="ml-20 ">Email address: { user.attributes.email }</p>
        <p className="ml-20 ">Avatar: { user.attributes.avatar }</p>*/}
      </div>
    </div>
  )
}

export default Profile