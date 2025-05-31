import React from 'react';
import { motion } from "motion/react"
import { AiOutlineMore } from "react-icons/ai";

export default function Message({ message, currentUser }) {
    const isSender = message.sender === currentUser;

    return (
     <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2 items-start gap-2`}>
         {isSender && (
             <div className="self-center text-gray-500 hover:text-gray-700 cursor-pointer">
                 <AiOutlineMore size={20} />
             </div>
         )}
     
         <div className={`chat ${isSender ? 'chat-end' : 'chat-start'}`}>
       <div className="chat-header">
         <strong>{message.sender}</strong>
       </div>
     
       <motion.div
         initial={{ scale: 0.9, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ type: 'spring', stiffness: 200, damping: 15 }}
         className={`chat-bubble ${
           isSender ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'
         }`}
       >
         {message.text}
       </motion.div>
     </div>
     
         {!isSender && (
             <div className="self-center text-gray-500 hover:text-gray-700 cursor-pointer">
                 <AiOutlineMore className='text-2xl' />
             </div>
         )}
     </div>
    );
}