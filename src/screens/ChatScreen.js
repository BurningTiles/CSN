import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Chat from './../Chat';

class ChatScreen extends Component {
  state = {
    messages: [],
  };

  get user() {
    return {
			_id: this.props.navigation.state.params.email,
      name: this.props.navigation.state.params.name,
    };
  }

  componentDidMount() {
    Chat.shared.getMessages((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      })),
    );
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        renderUsernameOnMessage={true}
        alwaysShowSend={true}
        onSend={(messages) => {Chat.shared.send(messages)}}
        user={this.user}
      />
    );
    return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
  }
}

export default ChatScreen;

/* 

class ChatScreen extends Component {
  state = {
    messages: [],
    profile: [],
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    firebase
      .database()
      .ref('messages')
      .on('child_added', (snapshot) => callback(this.parse(snapshot)));
	};
	
	send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  componentDidMount() {
    firebase
      .database()
      .ref(firebase.auth().currentUser.uid)
      .on('child_added', (snapshot) =>
        this.setState({messages: this.state.messages, profile: snapshot.val()}),
      );

    this.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      })),
    );
  }

  render() {
    const chat = (
      <GiftedChat
				messages={this.state.messages}
				renderUsernameOnMessage={true}
				alwaysShowSend={true}
        onSend={this.send}
        user={{_id: this.state.profile.email, name: this.state.profile.name}}
      />
    );
    return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
	} 

  rendertmp() {
    console.log(
      'name: ' + this.state.user.name + '\nemail: ' + this.state.user.email,
    );
    return <Text> Chat Screen </Text>;
  } 
}

export default ChatScreen;
 */
