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
      <div className="h-screen bg-gray-900 p-2 md:p-20 ">
        {/*Auth message and logout button*/}
        <div className=" grid md:flex justify-items-center gap-4 flex-col md:flex-row md:justify-between">
          <h1 className="text-green-300 pt-3 m-4 animate-pulse">Succesfully authenticated. Welcome back!</h1>
          <button className=" text-center text-lg text-black bg-red-700
            rounded-md w-40 h-16 " 
            onClick={logout}><p>Logout</p>
          </button>
        </div>
        {/*Profile Info*/}
        <div className= "container mx-auto overflow-auto mr-20 mt-20 text-gray-400
           bg-gray-600 rounded-md p-4 text-sm md:text-lg">
          <h1 className="text-white text-xl h-8 rounded-full ">Profile</h1>
          <div className=" ">
          <p className="md:ml-20 ">Accounts: {currentUser.get('accounts')}</p>
          <p className="md:ml-20 ">Email address: {currentUser.get('email')}</p>
          <p className="md:ml-20 ">Avatar: { currentUser.get("avatar") }</p>
          </div>
        </div>
        {/*Coming soon stuff*/}
        <div className=" text-white pt-20 text-center flex flex-col gap-2 md:gap-8">
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
