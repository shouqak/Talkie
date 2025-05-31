import React, { useState } from 'react'
import Login from './Login';
import ChatWindow from './ChatWindow';
function Home() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    if (!loggedInUser) {
        return <Login onLogin={setLoggedInUser} />;
    }
  return (
    <div>
       <div className="flex">
            <ChatWindow user="shouq" />
            <ChatWindow user="fajer" />
        </div>
    </div>
  )
}

export default Home