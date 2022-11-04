import Trip from "../../components/Trip";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const TripBooker = () => {
    const router = useRouter();
    const query = router.query;
    const [info,setInfo]=useState({});

    const getData = async  ()=>{
        await axios.get('http://localhost:3000/api/trips/'+query.id)
        
        .then(function (response) {
            let arr = response.data
            setInfo(response.data.data);
            console.log(arr.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    useEffect(  ()=>{  getData()  },[] );
    return ( <Trip info={info}/> );
}
 
export default TripBooker;