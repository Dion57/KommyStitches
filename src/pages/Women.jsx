import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import WomenHero from '../../public/assets/womenHeroo.jpg'
import { Link } from 'react-router-dom'

const Women = () => {
  const {data} = useContext(ProductContext)
  return (
    <div>
       <div className='mb-36 relative'> 
    <img className='h-[400px] w-full object-cover' src={WomenHero} alt="" />
    <div className='md:top-0 absolute top-[90px] s:top-5 left-[60px] s:left-4 s:w-[250px] w-[450px] text-white text-5xl s:text-3xl font-bold '>
       <h1 className='text-8xl s:text-6xl shadow-xl shadow-black'>Shop Women's Wears</h1>
       </div>
  </div>
  <section className=' flex justify-center mt-10 mb-36'>
  <div className="grid grid-cols-3 s:grid-cols-1 w-[70%] s:w-[75%] items-center justify-center gap-10">
  {data?.map( item => (
       item.category === "women's clothing" ? (
      <div key={item.id} className="flex text-center">
        <div className="">
         <div className='relative group'>
         <Link to={`/product/${item.id}`}>
         <img
            className="mix-blend-color-burn w-[100%] aspect-square object-contain border group-hover:object-cover shadow-lg group-hover:duration-700 group-hover:ease-in-out group-hover:scale-110 hover:rounded-none"
            src={item.image}
            alt={item.title || `Image of Clothing`}            
          />
           <div className='bg-pink-100 w-full mt-5 absolute bottom-1 opacity-0 bg-opacity-85 text-xs p-2 rounded-3xl group-hover:opacity-100 transition-all'>
            <p>{item.title}</p>
           <p className='mt-1 font-semibold'>${item.price}</p>
           </div>
          </Link>
         </div>
        </div>
      </div>
    ) : null 
  ))}
</div>
  </section>
    </div>
  )
}

export default Women
