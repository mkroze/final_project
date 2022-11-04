import { useState, useEffect } from "react";
import axios from "axios";
const SignUp = () => {
    const [validation, setValidation] = useState({
        inputs: {
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        errors: {
            username: 'Awaiting input',
            email: 'Awaiting input',
            password: 'Awaiting input',
            password_confirmation: 'Awaiting input',
        }

    })
    const {username, email, password} = validation.inputs
    const [validity, setValidity] = useState(false);
    
    const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

    const handleSubmit = (event) => {
        event.preventDefault();
        let count = 0;
        Object.values(validation.errors).forEach(
            (val) => (val.length > 0)
                ? count += 1
                : count = count

        );
        console.log({username, email, password});
        
        
        
        axios.post(
            'http://localhost:3000/api/members',
            {username, email, password})
        .then(
            response => {
                console.log(response)
                window.location.href = "/"
            }
        );

    }

    const handleChange = (event) => {
        event.preventDefault;
        const { name, value } = event.target;
        console.log(name)
        let {inputs,errors} = validation;
        
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username must be 5 characters long!' : '';
                break;
            case 'email':
                errors.email = Regex.test(value) ? '' : 'Email is not valid!';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be eight characters long!' : '';
                break;
            case 'password_confirmation':
                errors.password_confirmation = value.length < 8 ? 'Password must be eight characters long!' : '';
                break;
        }

        inputs[name] = value;

        setValidation({ inputs, errors });
        console.log(validation)
    }

    

    


    return (<>

        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl text-left font-bold sm:text-3xl text-cyan-500">Get started today!</h1>

                    <p className="mt-4 text-left text-gray-500">
                        Enroll in our membership and benefit from a lot of useful services.
                    </p>
                </div>

                <form onSubmit={handleSubmit} action="/" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div>
                        <label for="username" className="sr-only">Username</label>

                        <div className="relative">
                            <input onChange={handleChange}
                                type="text"
                                className="w-full rounded-lg border-gray-200 focus:border-cyan-300 border-2 focus:border-2 focus:outline-none p-4 pr-12 text-sm shadow-sm  "
                                placeholder="Enter username"
                                name="username"
                            />

                            <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                <svg
                                    className="h-5 w-5 text-gray-400 hover:text-cyan-400"

                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
                        c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
                        c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
                        c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
                        c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
                        C15.328,9.982,12.943,12.367,10,12.367z"/>

                                </svg>
                            </span>

                        </div>
                        <div>{validation.errors.username.length > 0 && <span className="text-indigo-600 text-xs">{validation.errors.username}</span>}</div>
                    </div>

                    <div>
                        <label for="email" className="sr-only">Email</label>

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
                        <div>{validation.errors.email.length > 0 && <span className="text-indigo-600 text-xs">{validation.errors.email}</span>}</div>
                    </div>

                    <div>
                        <label for="password" className="sr-only">Password</label>
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
                        <div>{validation.errors.password.length > 0 && <span className="text-indigo-600 text-xs">{validation.errors.password}</span>}</div>
                    </div>

                    <div>
                        <label for="password_confirmation" className="sr-only">Password</label>
                        <div className="relative">
                            <input onChange={handleChange}
                                type="password"
                                className="w-full rounded-lg border-gray-200 focus:border-cyan-300 border-2 focus:border-2 focus:outline-none p-4 pr-12 text-sm shadow-sm  "
                                placeholder="Confirm password"
                                name="password_confirmation"
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
                        <div>
                            {
                                (validation.errors.password_confirmation.length > 0) && <span className="text-indigo-600 text-xs">{validation.errors.password_confirmation}</span>
                            }
                        </div>
                        <div>
                            {
                                (validation.inputs.password_confirmation != validation.inputs.password) && <span className="text-indigo-600 text-xs">You should type the same password</span>
                            }
                        </div>
                    </div>


                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                            Already have an account? <a href="./Login" className="underline">Log in</a>
                        </p>

                        {/* {
                (validity==true)
                ?<button
                    type="submit" id="submitButton"
                    
                    className="active:bg-black ml-3 inline-block rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
                >
                    Sign up
                </button>
                :<button
                    type="submit" id="submitButton"
                    disabled
                    className="ml-3 inline-block rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
                >
                    Sign up
                </button>
            } */}
                        <button
                            type="submit" id="submitButton"

                            className="active:bg-black ml-3 inline-block rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="https://images.unsplash.com/photo-1650179745351-7cb065fb0868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpc2h8ZW58MHwxfDB8dGVhbHw%3D&auto=format&fit=crop&w=400&q=60"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>

    </>);
}

export default SignUp;