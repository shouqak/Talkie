import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';
import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';


export default function ChatWindow({ user }) {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await axios.get('https://6839b2ad6561b8d882b15b16.mockapi.io/message'); 
            setMessages(res.data);
        };
        fetchMessages();

        const interval = setInterval(fetchMessages, 500);
        return () => clearInterval(interval);
    }, []);

    const handleSend = async () => {
        if (!newMessage.trim()) return;

        try {
            const res = await axios.post('https://6839b2ad6561b8d882b15b16.mockapi.io/message',  {
                sender: user,
                text: newMessage,
            });

            setMessages((prev) => [...prev, res.data]);
            setNewMessage('');
        } catch (err) {
            toast.error('Failed to send message');
        }
    };

    return (
        <>
        <Toaster/>
         <div className="w-full text-white bg-gray-900  h-screen flex flex-col border rounded-2xl mx-10  "
      
        >
            <div className='flex justify-between border-b p-3 mb-2'>
            <h2 className="text-xl font-bold mb-4 ">{user}</h2>
           <div className='flex gap-3 pt-2'>
            <FiPhone className='hover:bg-gray-700  rounded-full cursor-pointer'  />
<IoVideocamOutline className='hover:bg-gray-700  rounded-full  cursor-pointer' />

           </div>
           </div> 
           <div className="flex-1 overflow-y-auto space-y-2 mb-4   
 ">
                {messages.map((msg) => (
                    <Message key={msg.id} message={msg} currentUser={user} />
                ))}
            </div>
            <div className="flex gap-2  p-3">
               <FiPlus className='mt-2 hover:bg-gray-700 rounded-full cursor-pointer' size={20} />

                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 border p-2 rounded"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button
                    onClick={handleSend}
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 cursor-pointer"
                >
                    Send
                </button>
            </div>
        </div>
        </>
    );
}