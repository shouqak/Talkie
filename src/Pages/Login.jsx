import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Component/Footer';
import Nav from '../Component/Nav'
import img from "../assets/mobile-chatting.png"
import toast, { Toaster } from 'react-hot-toast';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post('https://6839b2ad6561b8d882b15b16.mockapi.io/auth',  {
            username,
        });

        console.log('API Response:', res.data);

        let loggedInUser;

        if (typeof res.data === 'string') {
            loggedInUser = res.data;
        } else if (res.data.user) {
            loggedInUser = res.data.user;
        } else if (res.data.username) {
            loggedInUser = res.data.username;
        }

        if (['shouq', 'fajer'].includes(loggedInUser)) {
            onLogin(loggedInUser);
        } else {
            toast.error('Unauthorized user');
        }
    } catch (err) {
        toast.error('Login failed. Please try again.');
        console.error('Error during login:', err);
    }
};
    return (
       <>
       <Toaster/>
         <Nav/>
       <section className="bg-gray-900 text-white">
         <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16">
           
           <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-8">
             <div>
               <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                 Say Hello to <span className="text-purple-500">Talkie</span>
               </h1>
               <p className="text-lg sm:text-xl text-gray-300">
                 Connect, chat, and share — all in one place. Talkie brings people together with fast, secure, and fun conversations.
               </p>
             </div>
       
             <div className="w-64 sm:w-80 lg:w-96">
               <img
                 src={img}
                 alt="Chat Illustration"
                 className="w-full object-contain"
               />
             </div>
           </div>
       
           <div className="w-full max-w-md mb-10 lg:mb-0">
             <form
               onSubmit={handleSubmit}
               className="bg-white text-black shadow-xl rounded-2xl px-8 py-10 animate-fade-in"
             >
               <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                 Let’s Get You Chat
               </h2>
       
              
       
               <div className="mb-5">
                 <label
                   htmlFor="username"
                   className="block text-sm font-medium text-gray-700 mb-1"
                 >
                   Your Username
                 </label>
                 <input
                   type="text"
                   id="username"
                   placeholder="Enter shouq/fajer"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   className="w-full border  rounded-lg p-3  focus:ring-2 transition"
                 />
               </div>
       
               <button
                 type="submit"
                 className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
               >
                 Sign In
               </button>
             </form>
           </div>
         </div>
       </section>
       <Footer/>
       
       </>
    );
}