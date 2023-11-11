import React from 'react'
import Link from "next/link"
import { useDispatch } from 'react-redux'
import { resetCart } from '@/Store/nextSlice';
const successPage = () => {

    const dispatch = useDispatch();
  return (
    <div className=' flex flex-col gap-2 items-center justify-center py-20'>
      <h1> Thank you for shopping from next_amazon</h1>
      <Link
      className=' text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300'
      href={'/'} onClick={()=>dispatch(resetCart())}>
      <p>Continue Shopping</p>
      </Link>
    </div>
  )
}

export default successPage
