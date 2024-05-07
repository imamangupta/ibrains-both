import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Signup() {


  // let host = "http://localhost:4000";
  let host = process.env.REACT_APP_API_REQUEST;

  const [credential, setCredential] = useState({ username: '', email: '', password: '', cpassword: '' });
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [validuser, setValiduser] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    document.getElementById('paraid').innerHTML = ' <p class="text-gray-900">Loading...</p>';


    const response = await fetch(`${host}/api/user`, {
    
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credential.username, email: credential.email, password: credential.password })
    });
    const json = await response.json();
    if (json) {
      if (!json.errors) {
        if (!json.message) {


          setCredential({ username: '', email: '', password: '' })
          localStorage.setItem('token', json)
          // console.log(json);
          navigate(`/`);
          window.location.reload();
        } else {
          document.getElementById('paraid').innerHTML = "Username/Email Already Exited.";
        }
      }else{
        document.getElementById('paraid').innerHTML = "Error.";
      }
    }
    }


    const onChange = (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (


      <>

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <div style={{ width: '500px', marginTop: '100px' }}>


            <form onSubmit={register}>

              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email" value={credential.email} onChange={onChange} name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
              </div>
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" id="username" value={credential.username} onChange={onChange} name='username' required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" />
              </div>
              <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" value={credential.password} onChange={onChange} name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div class="mb-6">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input type="password" id="cpassword" value={credential.cpassword} onChange={onChange} name="cpassword" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
              </div>
              <p id='paraid' class="text-red-600"></p>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">If you have account <Link to="/login" class="text-blue-600 hover:underline dark:text-blue-500">Login here.</Link>.</label>
            </div>



          </div>
        </div>


      </>
    )
  
  }