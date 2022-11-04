import { useState } from "react";
import Link from 'next/link'
const Navbar = () => {
    const [routes,setRoutes] = useState([
        { title: "Home", path: "/" },
        { title: "About", path: "/About" },
        
        // { title: "Encyclopedia", path: "/services/Encyclopedia" },
        // { title: "Trips", path: "/services/Trips" },
        { title: "Services", path: "/services/" },
        { title: "Login", path: "/Login" },
        { title: "SignUp", path: "/SignUp" },
    ])
    const [info,setInfo] = useState({
        title: "Spinnerbait"
    })
    return ( 
        <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div className="flex justify-between items-center">
                <div className="text-2xl flex items-center font-bold text-gray-800 md:text-3xl">
                
                <img src="/logo.png" width={100} />
                    <a href="/" className="text-cyan-700">{info.title}</a>
                </div>
                <div className="md:hidden">
                    <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                {
                    routes.map( (route)=>{
                        return <Link href={route.path} >
                            <a className="text-gray-800 rounded text-cyan-600 hover:text-cyan-300 hover:font-medium font-medium py-2 px-2 md:mx-2">
                                {route.title}
                            </a>
                        </Link>
                    })
                }
            </div>
        </div>
        
    </nav>
    
    );
}
 
export default Navbar;