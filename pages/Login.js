import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
const Login = () => {
    const router = useRouter();
    const query = router.query;
    const [info,setInfo]=useState({});

    const [validation, setValidation] = useState({
        inputs:{
            email:'',
            password:'',
        },
        errors:{
            email:'Awaiting input',
            password:'Awaiting input',
        }
    });

    const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
    
    const checkIdentifiers = async () => {
        try {
            const {data: response} = await axios.get("http:/localhost:3000/api/members/"+query.email)
            let arr = response["data"];
            console.log('i succeeded : ')
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    const handleSubmit = async (event) => {
        console.log(query)
        event.preventDefault();
        let count = 0;
        Object.values(validation.errors).forEach(
            (val) => (val.length > 0 )
            ?count+=1
            :count=count
        );
        
        checkIdentifiers()
        
    }
    
    const handleChange = (event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        
        let {inputs,errors} = validation;
        
        switch(name){
            case 'email':
                errors.email = Regex.test(value)? '': 'Email is not valid!';
            break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
            break;  
        }
        
        inputs[name] = value;
        setValidation({inputs,errors});
    }
    return ( <>
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl text-left font-bold sm:text-3xl text-cyan-500">Log in your account</h1>
    
            <p className="mt-4 text-left text-gray-500">
            to have access to our services
            </p>
        </div>
    
        <form 
        onSubmit={handleSubmit}
        action="/" 
        className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
            <label htmlFor="email" className="sr-only">Email</label>
    
            <div className="relative">
                <input onChange={handleChange}
                type="email"
                className="w-full rounded-lg border-gray-200 focus:border-cyan-300 border-2 focus:border-2 focus:outline-none p-4 pr-12 text-sm shadow-sm  "
                placeholder="Enter email"
                name="email"
                />
    
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 hover:text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                </svg>
                </span>
            </div>
            <div>
                {
                    validation.errors.email.length > 0 && <span className="text-indigo-600 text-xs">{validation.errors.email}</span>
                }
            </div>
            </div>
    
            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
                <input onChange={handleChange}
                type="password"
                className="w-full rounded-lg border-gray-200 focus:border-cyan-300 border-2 focus:border-2 focus:outline-none p-4 pr-12 text-sm shadow-sm  "
                placeholder="Enter password"
                name="password"
                />
    
                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 hover:text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                </svg>
                </span>
            </div>
            <div>{validation.errors.password.length > 0 &&  <span className="text-indigo-600 text-xs">{validation.errors.password}</span>}</div>
            </div>
    
            <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
                No account? <a href="./SignUp" className="hover:underline hover:text-cyan-600 ">Sign up</a>
            </p>
    
            <button
                type="submit" onSubmit={handleSubmit}
                className="ml-3 inline-block rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
            >
                Sign in
            </button>
            </div>
        </form>
        </div>
    
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1490025091436-1c61bbdc7f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaHxlbnwwfDF8MHx0ZWFsfA%3D%3D&auto=format&fit=crop&w=400&q=60"
            className="absolute inset-0 h-full w-full object-cover"
        />
        </div>
    </section>
    </> );
}

export default Login;