import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import { CiLocationOn } from 'react-icons/Ci';
import { BsSearch } from 'react-icons/Bs';
import { BiCaretDown, BiHeart } from 'react-icons/Bi';
import { BsCart4 } from 'react-icons/Bs';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '@/type';
import { useSession, signIn, signOut } from "next-auth/react"
import { addUser } from '@/Store/nextSlice';

const Header = () => {
  const { data: session } = useSession()

  const { productData, favouriteData,userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  const dispatch = useDispatch();
useEffect(()=>{
  if(session){
    dispatch(addUser({
      name:session?.user?.name,
      email:session?.user?.email,
      image:session?.user?.image,

    }))
  }
},[session])

  return (
    <div>
      <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50 ">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          {/* logo */}
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] hiddenxl:inline-flex gap-1">
            <Image className=" w-28 object-cover" src={logo} alt="logoImg" />
          </div>
          <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] hiddenxl:inline-flex gap-1">
            <CiLocationOn />

            <div className="text-xs ">
              <p>Deliver to</p>
              <p className="text-white font-bold uppercase">USA</p>
            </div>
          </div>
          {/* delivery */}
          <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
            <input
              className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
            focus-visible:border-amazon_yellow"
              type="text"
              placeholder="Search next_amazon_yt products"
            />
            <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
              <BsSearch />
            </span>
          </div>
          {userInfo ?(

            <div
            className="    flex items-center px-2 border border-transparent hover:border-white cursor-pointer
             duration-300 h-[70%] gap-1"
            >
           <img src={userInfo.image} alt="userImage" className=' w-8 h-8 rounded-full object-cover'/>
          <div className=' text-xs  text-gray-100 flex flex-col justify-between '>
              <p className=' text-white font-bold '>{userInfo.name}</p>
              <p>{userInfo.email}</p>
          </div>
          </div>
            )
          :(<div onClick={()=>{
            signIn()
          }}
            className=" text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer
          duration-300 h-[70%]"
          >
            <p> Hello, Sign in</p>
            <p className=" text-white font-bold flex items-center">
              Accounts & Lists{' '}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>)}
          <div className=' text-xs text-gray-100 flex flex-col justify-center 
           border border-transparent hover:border-white cursor-pointer
            duration-300 h-[70%] relative px-2'>
            <p>Marked

            {
              favouriteData.length>0 && (
                <span className='  absolute right-1 top-2 w-5 h-5  border-gray-400 items-center justify-center 
                text-xs text-amazon_yellow '>
                {favouriteData.length}
              </span>)
            }
            </p>
            <p className=" text-white font-bold">&Favourite
            </p>
          </div>

          <Link
            href={'/cart'}
            className="flex items-center px-2 border border-transparent hover:border-white 
           cursor-pointer duration-300 h-[70%] relative "
          >
            <BsCart4 />
            <p className="text-xs  font-bold mt-3">
              Cart
            </p>
              <span className=" absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
                {productData?productData.length:0}
              </span>
          </Link>
          {/* delivery */}

          {/* delivery */}
          {/* delivery */}
          {/* delivery */}
        </div>
      </div>
    </div>
  );
};

export default Header;
