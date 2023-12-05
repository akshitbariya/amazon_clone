import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
const DynamicPage = () => {
  const [product, setProduct] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    setProduct(router.query);
  }, [router.query]);
  console.log(router.query);
  return (
    <div className=' max-w-screen-xl mx-auto px-4 py-4  md:py-10'>
      <div className=' w-full md:grid-cols-3 gap-3 bg-gray-100 rounded-lg'>
        <div className=' flex items-center justify-center '>

        <Image
          src={product.image}
          alt="product image"
          width={500}
          height={500}
          />
          </div>
      </div>
    </div>
  );
};

export default DynamicPage;
