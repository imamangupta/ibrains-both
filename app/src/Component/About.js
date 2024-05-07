import React from 'react'

export default function About() {
  return (
    <>

      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div style={{ width: '1000px' }}>
          <b>Frontend Technology</b>
          <p>React.js ✅</p>
          <p>Tailwind Css ✅</p>
          <p>pages</p>

          <p>Post/Home page - you can see the post one it if you are login otherwire you are not redirct to the login page. ✅</p>
          <p>Signup page - you can create account theri all fields are require otherwire you can't do that and email/username will be unique. ✅</p>
          <p>Login page - if you have account already then you can login their same all field are require and password/email end correct otherwire con't able to use. ✅</p>

          <br />
          <b>Backend Technology</b>
          <p>Node.js </p>
          <p>Express </p>
          <p>ports </p>

          <p>post createuser port- In that port user middleware to validate user input are valid or invalid and also use jwt and password hash ✅</p>
          <p>post login port- in that port find the user email or and compareing the password. ✅</p>
          <p>get post port- in that port geting post from data base.✅</p>
          <p>get user port- in the port getting the user from database first taking the jwt.✅</p>

          <br />
          <b>Personal Detials</b>
          <p>i am not shearing my .env file in backend i shared .env.example</p>


          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />







        </div>
      </div>

    </>
  )
}
