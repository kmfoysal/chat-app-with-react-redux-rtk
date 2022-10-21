import React from 'react';
import { useSelector } from 'react-redux';
import { useGetConversationsQuery } from '../../features/conversations/conversationsApi';
import ChatItem from './ChatItem';
import Error from '../ui/Error'

const ChatItems = () => {

  const {user} = useSelector((state)=>state.auth) || {};
  const {email} = user || {};
  const {data:conversations, isLoading, error, isError} = useGetConversationsQuery(email)

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
    content =  conversations.map((conversation) => {
        return (
          <li key={conversation.id}>
            <ChatItem
              avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
              name="Saad Hasan"
              lastMessage="bye"
              lastTime="25 minutes"
            />
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