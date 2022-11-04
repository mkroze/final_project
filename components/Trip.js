const Trip = ({info}) => {
    const handleClick = () => {

    }
    return ( <><div  className="bg-white">
    <div  className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
    
    <div  className="lg:max-w-lg lg:self-end">
        

        <div  className="mt-4">
        <h1  
        className="text-3xl font-extrabold tracking-tight text-cyan-600 sm:text-4xl">
            {info.destination}
        </h1>
        </div>

        <section aria-labelledby="information-heading"  className="mt-4">
        

        <div  className="flex items-center">
            <p  className="text-lg text-gray-900 sm:text-xl">
                {info.price} <span className="text-sm text-gray-900">MAD</span>
            </p>

            <div  className="ml-4 pl-4 border-l border-gray-300">
                <div  className="flex items-center">    
                    {info.level}
                </div>
            </div>
            <div  className="ml-4 pl-4 border-l border-gray-300">
                <div  className="flex items-center">    
                    {info.duration}
                </div>
            </div>
            <div  className="ml-4 pl-4 border-l border-gray-300">
                <div  className="flex items-center">    
                    {info.transport}
                </div>
            </div>
        </div>

        <div  className="mt-4 space-y-6">
            <p  className="text-base text-gray-500">
                {info.description}
                
            </p>
        </div>

        
        </section>
    </div>

    
    <div  className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div  className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img src={info.img} alt="lolz" 
        className="w-full h-full object-center object-cover"/>
        </div>
    </div>

    
    <div  className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
        <section aria-labelledby="options-heading">
        <h2 id="options-heading"  className="sr-only">Product options</h2>

        <form>
            
            
            <div  className="mt-10">
            <button 
            onClick={handleClick}
            type="submit"  
            className="w-full bg-cyan-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                Book trip
            </button>
            </div>
            
        </form>
        </section>
    </div>
    </div>
</div></> );
}

export default Trip;