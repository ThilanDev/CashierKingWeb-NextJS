import { Inter } from 'next/font/google'
import { BiArrowFromRight } from "react-icons/bi";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import Items from './items';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open,setOpen] = useState (true);
  return (
    <div className='flex'>
      <div className={`bg-gray-200 h-screen p-5 pt-9 ${open ? "w-72" : "w-20"} duration-300 relative`}>
      <BiArrowFromRight className={`text-4xl bg-white p-1 shadow-lg shadow-blue-200 rounded-l-full absolute -right-0 top-9 cursor-pointer ${!open && "rotate-180 rounded-l-full left-20 bg-gray-200"}`}
                        onClick={()=> setOpen (!open)}/>
      
      <div className='inline-flex'>
      <AiFillDingtalkCircle className={`bg-green-800 text-black text-4xl  rounded-lg cursor-pointer block float-left duration-300 ${open && "rotate-[360deg]"}`}/>
      <h1 className={`origin-left pl-2 font-medium text-2xl ${!open && "hidden"}`}>App</h1>
      </div>
      
      <div className={`flex mt-6 px-4 py-2 items-center rounded-md bg-gray-300 ${!open? "px-2.5" : "px-4" }`}>
      <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2 "}`}/>
      <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full text-gray-500 focus:outline-none ${!open && "hidden"}`}/>
      </div>
      <div className='pt-5 space-y-5 text-sm '>
        <p className='listp'>text1</p>
        <p className='listp'>text2</p>
        <p className='listp'>text3</p>
        <p className='listp'>text4</p>
        <p className='listp'>text5</p>
        
      </div>
      </div>


      <div className='container mx-auto  p-8'>
        <h1 className='text-2xl font-bold items-center text-center'>Sirii</h1>
        <hr className='border-2 mt-2'/>
        <Items/>
        </div>

    </div>
  )
}
