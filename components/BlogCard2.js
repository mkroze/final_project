const BlogCard2 = ({info}) => {
    return ( <div className="group">
        <img className="relative z-10 object-cover w-full rounded-2xl border-2 border-cyan-900 h-96" src={info.imgs[0]} alt=""/>

        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
            <h4 className="font-semibold text-gray-800 md:text-xl">
            {info.title}
            </h4>

            <p className="mt-3 text-sm text-gray-500 md:text-sm">
              {info.descriptions[0]} <br/>
              {info.descriptions[1]}
            </p>

            <a 
            className="font-bold text-md underline text-cyan-700 mt-16 "
            href={info.link.path}>
                {info.link.description}
            </a>
        </div>
    </div>);
}
 
export default BlogCard2;