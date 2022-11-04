

const Content = ({info}) => {
    
    return ( <section className="bg-cyan-50 rounded-3xl mt-4">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-cyan-900 ">
                {info.title}
            </h2>
            <p className="mb-16">
                {info.descriptions[0]} <br/>
            
            {info.descriptions[1]}
            </p>
            <a 
            className="font-bold text-3xl underline text-cyan-500 mt-16"
            href={info.link.path}>
                {info.link.description}
            </a>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={info.imgs[0]} alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={info.imgs[1]} alt="office content 2"/>
        </div>
        
    </div>
</section> );
}
 
export default Content;