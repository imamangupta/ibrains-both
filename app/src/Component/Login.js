import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {


    const navigate = useNavigate();
    // let host = "http://localhost:4000";
    let host = process.env.REACT_APP_API_REQUEST;


    const [credential, setCredential] = useState({ email: '', password: '' });

    const loginSubmit = async (e) => {
        e.preventDefault();
        document.getElementById('paraid').innerHTML = ' <p class="text-gray-900">Loading..</p>';

    
        const response = await fetch(`${host}/api/user/login`, {
            // const response = await fetch('http://localhost:5000/auth/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json();

        if (json) {
            if (!json.errors) {
            
             
                localStorage.setItem('token', json.authToken)
                navigate(`/`);
                window.location.reload();
            }else{
                document.getElementById('paraid').innerHTML = "Invalid Craditail.";
            }
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>

            <div style={{ width: '500px', marginTop: '100px' }}>

                <form onSubmit={loginSubmit}>

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" value={credential.email}  onChange={onChange} name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>

                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password"  value={credential.password} onChange={onChange} name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <p id='paraid' class="text-red-600"></p>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                <div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">If you don't have account <Link to="/signup" class="text-blue-600 hover:underline dark:text-blue-500">Ragister here.</Link>.</label>
                </div>

            </div>
        </div>
    )
}
