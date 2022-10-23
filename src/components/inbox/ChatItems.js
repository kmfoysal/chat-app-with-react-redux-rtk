import React from 'react';
import { useSelector } from 'react-redux';
import { useGetConversationsQuery } from '../../features/conversations/conversationsApi';
import ChatItem from './ChatItem';
import Error from '../ui/Error'
import moment from 'moment/moment';
import getPartnerInfo from '../../utils/getPartnerInfo';
import gravatarUrl from 'gravatar-url';
import { Link } from 'react-router-dom';

const ChatItems = () => {

  const {user} = useSelector((state)=>state.auth) || {};
  const {email} = user || {};
  const {
    data: conversations,
    isLoading,
    error,
    isError,
  } = useGetConversationsQuery(email);

  // decide What to render 

  let content = null ;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading</li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <Error message={error?.data} />
      </li>
    );
  } else if (!isLoading && !isError && conversations.length === 0) {
    content = (
      <li className="m-2 text-center">
        <Error message="No Message Found" />
      </li>
    );
  } else if (!isLoading && !isError && conversations.length > 0) {

    content = conversations.map((conversation) => {

      const { id, message, timestamp } = conversation;
      const { name, email:partnerEmail } = getPartnerInfo(conversation.users, email);

        return (
          <li key={id}>
            <Link to={`/inbox/${id}`}>
              <ChatItem
                avatar={gravatarUrl(partnerEmail, { size: 80 })}
                name={name}
                lastMessage={message}
                lastTime={moment(timestamp).fromNow()}
              />
            </Link>
          </li>
        );
    })
  }


    return (
      <ul>
          {content}
      </ul>
    );
};

export default ChatItems;