import React from 'react'
import dynamic from 'next/dynamic';
import { useMoralis } from 'react-moralis'
import Moralis from 'moralis'

const Profile = () => {
  const { logout } = useMoralis();
  
  const currentUser = Moralis.User.current();
  if (currentUser){
  return (
    <>
      <div className="h-screen bg-gray-900 p-20">
        {/*Auth message and logout button*/}
        <div className="container mx-auto flex gap-4 flex-col md:flex-row md:justify-between">
          <h1 className="text-green-300 pt-3 m-4 animate-pulse">Succesfully authenticated. Welcome back!</h1>
          <button className="h-12 text-lg text-black bg-red-700 rounded-md w-40"
            onClick={logout}>Logout
          </button>
        </div>
        {/*Profile Info*/}
        <div className= "container mx-auto mr-20 mt-20 text-gray-400 bg-gray-600 mr-80 rounded-md p-4">
          <h1 className="text-white text-xl h-8 rounded-full">Profile</h1>
          <p className="ml-20 ">Accounts: {currentUser.get('accounts')}</p>
          <p className="ml-20" id="email">Email address: {currentUser.get('email')}</p>
          <p className="ml-20 ">Avatar: { currentUser.get("avatar") }</p>
        </div>
        {/*Coming soon stuff*/}
        <div className=" text-white pt-20 text-center">
          <h1>Alot more details and features to come!</h1>
          <p className="ml-2 text-sm">Avatar upload and display</p>
          <p className="ml-2 text-sm">Token Balances</p>
          <p className="ml-2 text-sm">NFT support!</p>
          <p className="ml-2 text-sm">Staking!</p>
          <p className="ml-2 text-sm">Games!</p>
        </div>
      </div>
    </>
  )
}return 
  <>
  <h1>Error, please refresh your browser and try again.</h1>
  </>
}

export default Profile
