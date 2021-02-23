import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
} from 'react-native';
import firebase from './../firebase';
import MyButton from 'react-native-really-awesome-button/src/themes/rick';
import firestore from '@react-native-firebase/firestore';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.signup = this.signup.bind();
  }

  componentDidMount() {}

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  signup(e) {
    //e.preventDefault();
    //console.log('trying to signup\n\n\n');
    firebase
      .auth()
      .createUserWithEmailAndPassword(e.state.email, e.state.password)
      .then(() => {
        firebase
          .database()
          .ref(firebase.auth().currentUser.uid)
          .push({
            name: e.state.name,
						email: e.state.email,
						uid: firebase.auth().currentUser.uid,
          });
        e.props.navigation.replace('Home');
      })
      .catch((error) => {
        //console.log(error);
        alert(error.message);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require('./../assets/bg2.jpg')}
        style={styles.bgimage}>
        <View style={{flex: 1}} />
        <View style={{flex: 3, justifyContent: 'flex-end'}}>
          <Image
            source={require('./../assets/logo/CSN.png')}
            style={{
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, flex: 6}}>
          <View style={{justifyContent: 'space-around', flex: 2}}>
            <View>
              <View style={styles.black}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  onChangeText={(name) => {
                    this.setState({name});
                  }}
                  value={this.state.name}></TextInput>
              </View>
              <View style={styles.black}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={(email) => {
                    this.setState({email});
                  }}
                  value={this.state.email}></TextInput>
              </View>
              <View style={styles.black}>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={(password) => {
                    this.setState({password});
                  }}
                  value={this.state.password}
                />
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'space-around', flex: 1}}>
            <MyButton
              onPress={(next) => {
                this.signup(this);
              }}
              style={{alignSelf: 'center'}}
              type="secondary"
              width={150}>
              Signup
            </MyButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 3,
    borderColor: '#0055FF',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
  },
  black: {
    marginTop: 20,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
