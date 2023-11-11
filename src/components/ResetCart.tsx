import { resetCart } from '@/Store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const ResetCart = () => {
    const disptch =useDispatch()
    const handleResetCart =()=>{
            const confirmReset =window.confirm(
                "Are you sure to reset your items from the cart?"
            );
            if(confirmReset){
                disptch(resetCart())
            }
    }
  return (
    <div>
        <button 
        onClick={handleResetCart}
        className=' w-44 h-10 font-semibold  bg-gray-600 rounded-lg
         hover:bg-red-600 hover: text-white duration-300'>Reset Cart</button>
    </div>
  )
}

export default ResetCart
