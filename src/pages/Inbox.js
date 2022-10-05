import React from 'react';
import ChatBody from '../components/inbox/chatbody/ChatBody';
import Navigations from '../components/inbox/Navigations';
import SideBar from '../components/inbox/SideBar';

const Inbox = () => {
    return (
      <div>
        <Navigations />
        <div className="max-w-7xl mx-auto -mt-1">
          <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
            <SideBar />
            <ChatBody />
          </div>
        </div>
      </div>
    );
};

export default Inbox;