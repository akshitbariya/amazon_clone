import Image from 'next/image';
import React from 'react';
import FormattedPrice from './header/FormattedPrice';
import { LuMinus, LuPlus } from 'react-icons/Lu';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/Store/nextSlice';
interface Item {
  brand: string;
  catagory: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface CartProductProps {
  item: Item;
}

const CartProduct = ({ item }: CartProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className=" bg-gray-100  rounded-lg flex items-center gap-4">
      <Image
        className="  object-cover "
        width={150}
        height={150}
        src={item.image}
        alt="productImage"
      />
      <div className=" flex items-center px-2 gap-4 ">
        <div className=" flex flex-col gap-1">
          <p className=" text-lg font-semibold text-amazon_blue ">
            {item.title}
          </p>
          <p className=" text-sm  text-gray-600">{item.description}</p>
          <p className=" text-sm  text-gray-600">
            Unit Price{' '}
            <span className=" font-semibold text-amazon_blue">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className=" items-center flex gap-6">
            <div
              className=" flex items-center  border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg 
             shadow-gray-300 mt-1 justify-between "
            >
              <span onClick={()=>dispatch(increaseQuantity({
                 _id: item._id,
                 brand: item.brand,
                 catagory: item.catagory,
                 image: item.image,
                 description: item.description,
                 isNew: item.isNew,
                 oldPrice: item.oldPrice,
                 price: item.price,
                 title: item.title,
                 quantity: 1,
              }))} className=" w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300 ">
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
              onClick={()=>dispatch(decreaseQuantity({
                _id: item._id,
                brand: item.brand,
                catagory: item.catagory,
                image: item.image,
                description: item.description,
                isNew: item.isNew,
                oldPrice: item.oldPrice,
                price: item.price,
                title: item.title,
                quantity: 1,
             }))}
              className=" w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300 ">
                <LuMinus />
              </span>
            </div>
            <div
            onClick={()=>dispatch(deleteProduct(item._id))}
              className=" flex items-center text-sm font-medium text-gray-400
             hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose classname="mt-[2px] " />
              <p>Remove</p>
            </div>
          </div>
        </div>
        <div className=" text-lg font-semibold text-amazon_blue ">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
