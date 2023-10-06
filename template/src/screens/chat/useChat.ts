import {FlatList} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {messages as dummy_messages} from '../../constants/AppContent';
import {messages_interface} from './Chat';

const useChat = () => {
  const ref = useRef<FlatList>(null);
  const [message, setmessage] = useState('');
  const [messages, setmessages] =
    useState<messages_interface[]>(dummy_messages);

  useEffect(() => {
    setTimeout(() => {
      ref?.current?.scrollToEnd();
    }, 100);
  }, [messages]);

  const sendMessage = () => {
    const newMessage = {
      message,
      date: 'June 5, 2019',
    };
    setmessages(pre => [...pre, newMessage]);
    setmessage('');
  };
  return {
    sendMessage,
    ref,
    setmessage,
    message,
    messages,
  };
};

export default useChat;
