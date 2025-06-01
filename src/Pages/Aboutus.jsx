import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import { IoIosLock } from "react-icons/io";

export default function Aboutus() {
  return (
    <>
    <Nav/>
    <section className="bg-gray-900 text-white py-20">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-purple-600 mb-4">About Talkie</h2>
      <p className="text-lg max-w-2xl mx-auto">
        At Talkie, we believe that communication should be effortless, fun, and secure. We're here to bring people closer together—wherever they are.
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2 items-center">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p>
          Talkie is more than just a chat app. We're building a space where conversations flow smoothly, privacy is respected, and friendships grow. Whether you're chatting with a friend or creating a community, Talkie makes it easy.
        </p>
        <h3 className="text-2xl font-semibold">Why We Started</h3>
        <p>
          We noticed a gap — most messaging platforms were either too complex or too basic. So we created Talkie: a platform that's beautifully simple, yet powerful enough to handle all your conversations.
        </p>
        <h3 className="text-2xl font-semibold">Built for You</h3>
        <p>
          Talkie was designed with you in mind. Whether you’re connecting with loved ones, classmates, or colleagues, we offer a secure and sleek experience that keeps your chats personal and private.
        </p>
      </div>

      <div className="flex justify-center">
        <IoIosLock 
          className="w-96 h-screen object-contain text-white"
        />
      </div>
    </div>

   
  </div>
</section>
<Footer/>
    </>
  )
}
