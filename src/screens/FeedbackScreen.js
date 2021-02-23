import React, {Component} from 'react';
import firebase from '../firebase';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import MyButton from 'react-native-really-awesome-button/src/themes/rick';

class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  send = () => {
    firebase.database().ref('feedbacks').push({
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid,
      message: this.state.message,
		});
		alert("Thank you for your valuable feedback...\nWe will keep trying to improve your experience...");
		this.setState({message: ""});
  };

  render() {
    return (
      <ImageBackground
        source={require('./../assets/bg1.jpg')}
        style={styles.bgimage}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'column',
						height: '100%',
						width: '100%',
          }}>
          <View style={{flex: 1}} />
          <View style={{flex: 3, width: '100%'}}>
            <TextInput
              style={styles.input}
              placeholder="Write your feedback..."
              onChangeText={(message) => {
                this.setState({message});
              }}
              value={this.state.message}
            />
          </View>
					<View style={{flex:1}} />
          <View style={{flex: 1}}>
            <MyButton
              style={{alignSelf: 'center'}}
              type="secondary"
              width={150}
              onPress={() => {
                this.send();
              }}>
              Submit
            </MyButton>
          </View>
          <View style={{flex: 1}} />
        </View>
      </ImageBackground>
    );
  }
}

export default FeedbackScreen;

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
  },
  input: {
		alignSelf: 'center',
    width: '80%',
    height: '100%',
    borderWidth: 3,
    borderColor: '#0055FF',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
  },
});
