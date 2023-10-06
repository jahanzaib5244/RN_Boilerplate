import {View, Text, Image, FlatList, TextInput, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IMAGES_PATH from '../../constants/IMAGES_PATH';
import useChat from './useChat';

export interface messages_interface {
  message: string;
  date: string;
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.back_icon} source={IMAGES_PATH.left_arrow} />
      <Text style={styles.heading}>Customer Suppport</Text>
    </View>
  );
};

const MessageCard = ({item}: {item: messages_interface}) => {
  return (
    <View style={styles.message_container}>
      <Text style={styles.message}>{item?.message}</Text>
      <Text style={styles.date}>{item?.date}</Text>
    </View>
  );
};

const Chat = () => {
  const {sendMessage, messages, ref, setmessage, message} = useChat();

  return (
    <View style={styles.root}>
      <Header />
      <FlatList
        ref={ref}
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <MessageCard item={item} />}
        ListFooterComponent={
          <Text style={styles.resp_time}>
            We will give you responsed in 24 hours
          </Text>
        }
      />
      <Text style={styles.info_req}>View Request</Text>
      <View style={styles.input_container}>
        <TextInput
          onChangeText={t => setmessage(t)}
          style={styles.input}
          placeholder="Aa"
          value={message}
        />
        <Pressable>
          <Image source={IMAGES_PATH.attachment} style={styles.input_icon} />
        </Pressable>
        <Pressable onPress={sendMessage}>
          <Image source={IMAGES_PATH.send} style={styles.input_icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default Chat;
