import { StateProps } from '@/type';
import React from 'react';
import { LuMenu } from 'react-icons/Lu';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "next-auth/react"
import { removeUser } from '@/Store/nextSlice';

const BottomHeader = () => {

  const dispatch = useDispatch();

  const {userInfo } = useSelector(
    (state: StateProps) => state.next
  );
const handleSignout =()=>{
  signOut();
    dispatch(removeUser());

    }
  return (
    <div
      className="w-full h-10  bg-amazon_light text-sm px-4 text-white
    flex items-center"
    >
      <p
        className="flex items-center gap-1  h-8  px-2   ml-3
      border border-transparent  hover:border-white  cursor-pointer duration-300 "
      >
        <LuMenu classname=" text-xl" />
        All
      </p>
      <p
        className=" hidden md:inline-flex items-center gap-1  h-8  px-2   ml-3
      border border-transparent  hover:border-white  cursor-pointer duration-300"
      >
        Today's Deals
      </p>
      <p
        className=" hidden md:inline-flex items-center gap-1  h-8  px-2   ml-3
      border border-transparent  hover:border-white  cursor-pointer duration-300"
      >
        Customer Service
      </p>
      <p
        className=" hidden md:inline-flex items-center gap-1  h-8  px-2   ml-3
      border border-transparent  hover:border-white  cursor-pointer duration-300"
      >
       Registry
      </p>
      <p
        className=" hidden md:inline-flex items-center gap-1  h-8  px-2   ml-3
      border border-transparent  hover:border-white  cursor-pointer duration-300"
      >
       Gift cards
      </p>
      <p
        className=" hidden md:inline-flex items-center gap-1  h-8  px-2   ml-3
      border border-transparent  hover:border-white  cursor-pointer duration-300"
      >
        Sale
      </p>
      {
        userInfo && (

          <button 
          onClick={handleSignout}
          
            className=" hidden md:inline-flex items-center gap-1  h-8  px-2   ml-3
          border border-transparent  hover:border-red-400  hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
          >
            Sign Out
          </button>
          
        )
      }
      
    </div>
  );
};

export default BottomHeader;
