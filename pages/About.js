import { useState } from "react";
import LandingPage from "../components/LandingPage";
import Testimonial from "../components/Testimonial";

const About = () => {
    const [info,setInfo] = useState({
        imgs:[
            "https://cdn.pixabay.com/photo/2015/08/27/05/47/boy-909552__340.jpg",
            "https://images.pexels.com/photos/2146780/pexels-photo-2146780.jpeg?auto=compress&cs=tinysrgb&w=400",
            "https://cdn.pixabay.com/photo/2016/08/05/14/48/fishing-1572408__340.jpg"
        ],    
        title: "About us",
        cardBriefs: [
            {
                title: "Fishing enthusiasts",
                paragraph: "This is mainly a platform to share various thoughts and experiences"
            },
            {
                title: "Why we made this website ?",
                paragraph: "We made this virtual platform to help new fishermen be as efficient as possible on their fishing trip.",
            },
            {
                title: "Passion of fishing",
                paragraph: "Since we are passionate about fishing, we gathered the major needs of fishermen in one place."
            }
        ],
        asideBriefs:{
            title: "Browse a little in our blog",
            briefs:[
                "Thanks to the contribution of our more seasoned members, our blog have been filled with useful information.",
                "Make sur to look into it to know more about eveything we do in Spinnebait.",
            ],
            action:{
                path: "./Blog",
                title: "Check our blog"
            }
        },
        articleBriefs:{
            title: "A virtual place for passionate fishermen",
            brief: "This is a safe place to meet new people, to exchange experiences and learn new techniques. Moreover we go a step further by asking you to make it yours. "
        },
        sideImageBrief:{
            title:"Additional information",
            brief: "We are currently focusing our trips activities to Morocco but we are looking into expanding a bit further soon ! we will be able to organize trips to the following destinations",
            infos:[
                "Mallorca",
                "Canaries Islands",
                "Malta",
            ]
        },
        lastBrief:{
            title: "",
            brief: "",
        }
    })
    return ( <>
        <LandingPage info={info} />
        <Testimonial/>
    </> );
}
 
export default About;