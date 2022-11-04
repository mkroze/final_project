const VideoCard = ({info}) => {
    return ( <div className="group relative hover:z-10 -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white border border-transparent hover:border-gray-100 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
    <div className=" rounded-3xl overflow-hidden flex justify-around transition-all duration-500 group-hover:rounded-xl">
    <iframe width="600" height="250" src={info.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
    
    <div className="sm:p-2 sm:pl-0 sm:w-4/6 text-justify">
        <div className="justify-between " >
            <h3 className="text-2xl font-semibold text-cyan-800  ">
                {info.title}
            </h3>
            <p className="my-6 w-5/6 text-gray-600  ">
                {info.description}
            </p>
        </div>

        
    </div>
    </div> );
}
 
export default VideoCard;