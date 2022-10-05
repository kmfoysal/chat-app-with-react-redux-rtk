import React from 'react';
import Blank from '../components/inbox/chatbody/Blank';
import Navigations from '../components/inbox/Navigations';
import SideBar from '../components/inbox/SideBar';

const Conversations = () => {
    return (
      <div>
        <Navigations />
        <div className="max-w-7xl mx-auto -mt-1">
          <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
            <SideBar />
            <div className="w-full lg:col-span-2 lg:block">
              <div className="w-full grid conversation-row-grid">
                <Blank />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Conversations;