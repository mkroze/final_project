import Item from "../components/Item"
import Link from "next/link";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Shop = () => {
  const [items,setItems] = useState([])
  

  useEffect(()=>{
    const fetchData = async () =>{
        try {
            const {data: response} = await axios.get('http://localhost:3000/api/items');
            let arr = response["data"];
            
            setItems(arr);
        } catch (error) {
            console.error(error.message);
        }
    }
    fetchData();
    
},[]);
  
    return ( 
      <div className="mx-auto container px-6 xl:px-0 py-12">
    <div className="flex flex-col"> 
        <div className="flex flex-col justify-center">
            <div className="relative">
                <img className="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
                <img className="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                    <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Spinnerbait store</p>
                </div>
            </div>
        </div>
        
        <div className="mt-10 grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
          {
            items.map( (item)=>{
              return <Link href={`/items/${item._id}`}> 
                  <a  className="relative block bg-white">
                    <div  className=" h-96 rounded-xl group group-hover:bg-opacity-60 transition duration-500 relative bg-cyan-50 hover:bg-cyan-900   sm:p-28 py-36 px-10 flex justify-center items-center">
                <img 
                className="group-hover:opacity-60 transition duration-500 rounded-xl" 
                src={item.image} alt="sofa-4"
                width={200}
                 />
                <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                    <div>
                        <p className="group-hoveropacity-60 transition duration-500 text-xl leading-5 text-cyan-600 group-hover:text-white">{item.title}</p>
                    </div>
                    <div>
                        <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-cyan-800 group-hover:text-white">{item.price} MAD</p>
                    </div>
                </div>
                
                <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                        <button>
                        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg" alt="add"/>
                        <img className="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg" alt="add"/>
                    </button>
                    <button>
                        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg" alt="view"/>
                        <img className="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg" alt="view"/>
                    </button>
                    <button>
                        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg" alt="like"/>
                        <img className="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg" alt="like" />
                    </button>
                </div>
            </div></a></Link>
            })
          }
          
        </div> 

            
        </div>
        <div className="flex justify-end items-end mt-12">
            <div className="flex flex-row items-center justify-center space-x-8">
                <button className="text-base leading-none text-gray-800  border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                    <p>1</p>
                </button>
                <button className="text-base leading-none text-gray-800 e border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                    <p>2</p>
                </button>
                <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                    <p>3</p>
                </button>
                <button className="flex justify-center items-center">
                    <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg4.svg"alt="next"/>
                    <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg4dark.svg"alt="next"/>
                </button>
            </div>
        </div>
    </div>)
    // <div className="grid grid-cols-4">
    //   <div className="bg-white">
    //   <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //     <h2 id="products-heading" className="sr-only">
    //       Products
    //     </h2>

    //     <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
    //     {
    //     items.map( (item)=>{
    //       return <Link href={`/items/${item._id}`}> 
    //       <a  className="relative block bg-white">
    //         <button
    //           type="button"
    //           className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
    //         >
    //           <span className="sr-only">Wishlist</span>
    //           <svg
    //             className="h-4 w-4"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //             ></path>
    //           </svg>
    //         </button>

    //         <img
    //           alt="Toy"
    //           src={item.image}
    //           className="h-56 w-full object-contain lg:h-72"
    //         />

    //         <div className="p-6">
    //           <span
    //             className="inline-block bg-cyan-400 px-3 py-1 text-xs font-medium"
    //           >
    //             New
    //           </span>

    //           <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

    //           <p className="mt-2 text-sm font-medium text-gray-600">{item.price} MAD</p>

    //           <button
    //             type="button"
    //             className="mt-4 flex w-full items-center justify-center rounded-sm bg-cyan-700 px-8 py-4"
    //           >
    //             <span className="text-sm font-medium"> Add to Cart </span>

    //             <svg
    //               className="ml-1.5 h-5 w-5"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </a>
    //       </Link>
        
    //     })
    //   }
    //     </div>
    //   </div>
    // </div>
      
    // </div> 
}

export default Shop;