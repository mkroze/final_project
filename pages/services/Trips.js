import Card from "../../components/Card"; 
import { useState, useEffect } from "react";
import BlogTitle from "../../components/BlogTitle";
import axios from "axios";
import Link from "next/link";
const Trips = () => {
    const [infos,setInfos] = useState([])
    const [brief,setBrief] = useState({
        grandTitle: "Book your fishing trip",
        subTitles: [
            "Choose one of the following destinations, and plan your next fishing trip",
            "To book your trip, click on the booking button, and we will get back to you once the quota is met for confimation.",
        ]
    })
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const {data: response} = await axios.get('http://localhost:3000/api/trips');
                let arr = response["data"];
                console.log(arr);
                setInfos(arr);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
        
    },[]);
    return ( <>
    <BlogTitle info={brief} />
    <div className="grid grid-cols-3 
    :grid-cols-2">
        
        {
            infos.map( (trip)=>{
                return <Link href={`/trips/${trip._id}`}><a>
                     <Card info={trip} />
                     </a></Link>
            })
        }
    </div> </>);
}
 
export default Trips;