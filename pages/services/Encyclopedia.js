import { useState } from "react";
import BlogTitle from "../../components/BlogTitle";
import Content from "../../components/Content";

const Encyclopedia = () => {
    const [presentation,setPresentation] = useState({
        grandTitle:"Everything that can help you know a lot more about fish",
        subTitles: [
            "Like all animals, fish need a healthy living space, or habitat, to survive, grow, and reproduce. The quality and quantity of fish habitat in a waterbody directly affects fish populations. Recent studies have improved our understanding of the relationships between fish populations and their habitats and have led to many successful fish habitat improvement projects.",
            "A fish’s habitat includes all the required physical factors (temperature, water depth, current, waves, bottom types, cover, etc.) and chemical factors (oxygen levels, dissolved minerals, and other substances) in their environment. Habitat requirements for each stage of a fish’s life cycle — egg, larvae, juvenile and adult — may also be quite different within the same water body. In areas where fish habitats have been changed or lost by humans, many important fish species have declined in numbers, become extinct, or have been replaced by other species more tolerant of the habitat changes. ",
        ]
    })
    const [links,setLinks] =useState([
        {
            title: "Morrocan fauna (French)",
            path: "/pages.pdf"
        },
        {
            title: "Threaths to fish habitat",
            path: "/threats.pdf"
        },
        {
            title: "Fishing gear and methods",
            path: "/gear&methods.pdf"
        }
        
    ])
    return ( <div className="">
    <aside>
        <BlogTitle info={presentation}/>
    </aside>
    <article>
        <h2>Some useful links for you !</h2>
        <ul>
            {links.map( (link=>{
                return <li
                className="text-lg text-cyan-500 hover:underline">
                    <a href={link.path} download="guide"> 
                {link.title}
                </a></li>
            }))}
        </ul>
        
    </article>
    
    </div> );
}
 
export default Encyclopedia;