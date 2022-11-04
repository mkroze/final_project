const BlogTitle = ({info}) => {
    return ( <div className="my-16 space-y-2 w-5/6 m-auto ">
    <h2 className=" text-xl mb-8 font-bold text-cyan-600 text-center md:text-4xl">
        {info.grandTitle}
    </h2>
    {/* <p className="text-gray-600 text-2xl lg:mx-auto lg:w-6/12">
        {info.subTitles}
    </p> */}
    {info.subTitles.map( (subTitle)=>{
        return <p className="text-gray-600 text-justify w-1/2 text-md lg:mx-auto lg:w-6/12">
        {subTitle}
    </p> 
    })}
    </div> );
}
 
export default BlogTitle;