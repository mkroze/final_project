import { useState } from "react";

const LandingPage = ({info, children}) => {


    return ( <div className="text-gray-800 antialiased">
    
    <main>
    <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{minHeight: '75vh'}}
    >
        <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{backgroundImage: `url(${info.imgs[0]})`}}
        >
        <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-10 bg-cyan-900"
        ></span>
        </div>
        <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                {info.title}
                </h1>
                
            </div>
            </div>
        </div>
        </div>
        <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{height: '70px'}}
        >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
            className="text-cyan-50 fill-current"
            points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
        </div>
    </div>
    <section className="pb-20 bg-cyan-50 -mt-24">
        <div className="container mx-auto px-4">
        <div className="flex flex-row flex-wrap mx-auto">
            {info.cardBriefs.map( (brief,index)=>{
                return (index!=1)
                ?<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-2 text-center">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                    >
                        <div className="px-4 py-5 flex-auto">
                        
                        <h6 className="text-xl text-cyan-700 font-semibold">{brief.title}</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                            {brief.paragraph}
                        </p>
                        </div>
                    </div>
                </div>
                :<div className="w-full md:w-4/12 px-2 text-center">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                    >
                        <div className="px-4 py-5 flex-auto">
                        
                        <h6 className="text-xl text-cyan-700 font-semibold">{brief.title}</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                        {brief.paragraph} 
                        </p>
                        </div>
                    </div>
                    </div>
            })}
            
        </div>
        <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            
            <h3 className="text-3xl mb-2 font-bold leading-normal">
                {info.asideBriefs.title}
            </h3>
            {
                info.asideBriefs.briefs.map( (brief)=>{
                    return <p
                    className="text-md text-justify font-semibold leading-relaxed mt-4 mb-4 text-gray-700"
                >
                    {brief}
                </p>
                })
            }
            
            <div className="flex flex-row justify-between">
                <a
                href={info.asideBriefs.action.path}
                className="font-bold text-cyan-800 px-8 py-4 rounded-md bg-gray-50 hover:bg-cyan-800 hover:text-gray-50"
                >
                {info.asideBriefs.action.title}
                </a>
                
            </div>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white"
            >
                <img
                alt="..."
                src={info.imgs[1]}
                className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{height: '95px', top: '-94px'}}
                >
                    <polygon
                    points="-30,95 583,95 583,65"
                    className="text-white fill-current"
                    ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-cyan-900 bg-white">
                    {info.articleBriefs.title}
                </h4>
                <p className="text-md font-light mt-2 text-justify text-cyan-900">
                    {info.articleBriefs.brief}
                </p>
                </blockquote>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="relative py-20">
        <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{height: '80px'}}
        >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
        </div>
        <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src={info.imgs[2]}
            />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
                
                <h3 className="text-3xl font-semibold">{info.sideImageBrief.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {info.sideImageBrief.brief}
                </p>
                <ul className="list-none mt-6">
                    {
                        info.sideImageBrief.infos.map( (info,index)=>{
                            return <li className="py-2">
                                <div className="flex items-center">
                                <div>
                                    <span
                                    className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-800 justify-center bg-cyan-200 mr-3"
                                    >{index+1}</span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">
                                    {info}
                                    </h4>
                                </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    
    <section className="pb-20 relative block bg-cyan-900">
        <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{height: '80px'}}
        >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
            className="text-cyan-900 fill-current"
            points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold text-white">{info.lastBrief.title}</h2>
                    <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-200">
                        {info.lastBrief.brief}
                    </p>
                </div>
            </div>
            {children}
        </div>
    </section>
    
    </main>
    
</div>  );
}

export default LandingPage;