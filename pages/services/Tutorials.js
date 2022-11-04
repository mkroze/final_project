import { useState } from "react";
import VideoCard from "../../components/VideoCard";
import BlogTitle from "../../components/BlogTitle";

const Tutorials = () => {
    const [infos,setInfos] = useState([
        {
            presentation:{
                grandTitle: "Tutorials",
                subTitles: ["Here is a set of useful tutorials to teach you how to perform basic tasks",]
            },
            data:[
                {
                    video: "https://www.youtube.com/embed/7K76K96ptl8",
                    title: "Bait recipee #1",
                    description: "Hook stars bait recipe for freshwater anglers. It works well in all lakes and ponds ! Try it !"
                },
                {
                    video: "https://www.youtube.com/embed/MDr368rOnrg",
                    title: "Link of two hooks",
                    description: "Here is how to make a set of fishing rods with hooks, this set of bases is suitable for use in the sea, estuaries and other fishing grounds Hooks are among the smallest parts of an angler's setup, but in some ways they are also the most important. It may seem simple, but there are as many types of fishing rods as there are fish to catch."
                },
                {
                    video: "https://www.youtube.com/embed/wGfYPtW7whE",
                    title: "How fishing lures work (underwater fishing lures)",
                    description: "Underwater fishing lure footage and how different types of fishing lures work. There are a ton of kinds of fishing lures and it's easy for a beginner to be confused with all of the options. How do fishing lures work and what are all these different baits for?"
                },
                {
                    video: "https://www.youtube.com/embed/-P0OVbWvw7I",
                    title: "Fishing basics : how to get started !",
                    description: "Anyone can go fishing — you just need a few supplies to get started. Follow along as Take Me Fishing walks you through the essential fishing gear you will need for a fishing adventure."
                }
            ],
        },
        // {}
    ])
    return ( <>
        <div className="py-12">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            {
                infos.map( (info)=>{
                    return <>
                        <BlogTitle info={info.presentation}/>
                        {
                            info.data.map( (information)=>{
                                return <VideoCard info={information} />
                            })
                        }
                    </>
                })
            }
        
            
        </div>
    </div>
    </> );
}

export default Tutorials;