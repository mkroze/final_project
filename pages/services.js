import { useState } from "react";
import BlogTitle from "../components/BlogTitle";
import Content from "../components/Content";
import BlogCard2 from "../components/BlogCard2";
const Services = () => {
    const [infos,setInfos] = useState([
        {
            title: "Book you next organized fishing trip !",
            descriptions: [
                "Have you ever dreamt of going fishing on a boat to get better catches ?",
                "Well think no more as we have provided the best solution for you !"
            ],
            imgs: [
                "https://images.unsplash.com/photo-1513306239747-bca82d7485f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9hdCUyMGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1544883549-3ceee3fbfb58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaGluZyUyMG5ldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            ],  
            link:{
                description: "Book your trip now !",
                path: "/services/Trips"
            }                                 
        },
        {
            title: "Learn fishing abc's via some tutorials",
            descriptions: [
                "Would you like to learn how to prepare bait and more ?",
                "You should then consult our rubric on the subject"
            ],
            imgs: [
                "https://images.unsplash.com/photo-1592929043000-fbea34bc8ad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1625872613304-dedfb5fca0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            ],
            link:{
                description: "Check out the latest videos !",
                path: "/services/Tutorials"
            }                                  
        },
        {
            title: "Get all the useful equipment via our shop",
            descriptions: [
                "Is something missing on your fishing gear ? ",
                "Check our shop and get anything you need at the best price on the market !"
            ],
            imgs: [
                "https://images.unsplash.com/photo-1529230117010-b6c436154f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaGluZyUyMHJvZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1506098920664-bd27e1edfe6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaGluZyUyMGdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            ],
            link:{
                description: "Visit our online shop !",
                path: "/Shop"
            }                                 
        },
        {
            title: "Learn more about the water fauna in your area",
            descriptions: [
                "Would you like to better understand the environment where you practice ?",
                "Consult the encyclopedia we made based on official documents, to improve your catch rate !"
            ],
            imgs: [
                "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
                "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaCUyMGtub3dsZWRnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            ], 
            link:{
                description: "Browse the encyclopedia for more knowledge !",
                path: "/services/Encyclopedia"
            }                                  
        },
        
    ])
    const [presentation,setPresentation] = useState({
        grandTitle: "What we can do for you !",
        subTitles: [
            "Have you ever wanted to go experience fishing somewhere quite far but always lacked the means to do so ? ",
            "Is there something that you might need to learn dur to its importance in the process ?"
            ,"Are you sure that you have all the necessary gear with enough spares that will last you the whole duration of your next fishing travel ?"
            ,"If some of your encouters picked your curiosity you can always look for answers in our online marine encyclopedia !"
        ]
    },)
    return <>
    <BlogTitle info={presentation}/>
    
    
    
    <div className="grid grid-cols-2 gap-16 w-5/6 m-auto">
        {
            infos.map( (info)=>{
                return <BlogCard2 info={info} />
            })
        } 
    </div>
    
    </>
}
 
export default Services;