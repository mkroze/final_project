import Newsletter from "../components/Newsletter";
import { useState } from "react";
import LandingPage from "../components/LandingPage";

 const Index = () => {
  const [info,setInfo] = useState({
    imgs:[
        "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1569091923578-399adee3f634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    ],    
    title: "Your next fishing trip starts with us.",
    cardBriefs: [
        {
            title: "Booking trips",
            paragraph: "You can enroll in one of our organized trips where everything will be taken care of !"
        },
        {
            title: "Online Shop",
            paragraph: "you will find all the necessary gear to cover your every need during your next fishing experience.",
        },
        {
            title: "Big Community",
            paragraph: "Members of our little fishing club share wisdom and tips to improve our community fishing skills. You can browse through the blog to share or read more about experiences of other members."
        },
        
        
        
    ],
    asideBriefs:{
        title: "Join us and fishing will become easier and more fun !",
        briefs:[
            "Thanks to the shared knowledge amongst the members of our community and the provided means of transportation, you can optimise your fishing experience.",
            "Moreover you can browse through our shop to acquire the necessary gear for your trip, and thanks to the encylopedia new members can strenghten their knowledge of the local marine fauna which in returns will ensure better understandig of each specie.",
        ],
        action:{
            path: "./services",
            title: "Check our services"
        }
    },
    articleBriefs:{
        title: "Share your fishing experiences with us !",
        brief: "Log into our blog, and tell us about your personal experiences. Shared knowledge amongst fisherman and fisherwomen can be a goldmine of information since it is all based on experience."
    },
    sideImageBrief:{
        title:"Useful information",
        brief: "You can consult multiple useful information on this website to make your experience easier !",
        infos:[
            "Fauna and flora studies",
            "Tides measurements",
            "Tutorials for basic tasks",
        ]
    },
    lastBrief:{
        title: "Help improve the community",
        brief: "Shared knowledge constitutes the cornerstone of our club, so feel free to comsult our blog, and to ask questions Our experienced members will be happy to help. Moreover, if you have any suggestions that might help improve the website, please send your suggestions in the form below."
    }
})
return ( <>
    <LandingPage info={info} />
    <Newsletter />
</> );
}

export default Index;