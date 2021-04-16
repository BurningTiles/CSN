import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  BackHandler,
} from 'react-native';
import firebase from '../firebase';
//import {Toast, Root} from 'native-base';

class ProfileScreen extends Component {
  get user() {
    return {
      _id: this.props.navigation.state.params.email,
      name: this.props.navigation.state.params.name,
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref(firebase.auth().currentUser.uid)
      .on('child_added', (snapshot) => this.setState({user: snapshot.val()}));
  }

  render() {
    return (
      /* <Root> */
      <ImageBackground
        source={require('./../assets/bg1.jpg')}
        style={styles.bgimage}>
        <View style={{height: '50%', width: '100%'}}>
          <View style={styles.col}>
            <Text style={styles.name}>Profile</Text>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.iconStyle}
            />
            <View style={{height: 50}}>
              <View style={styles.item}>
                <Text style={styles.itemtext}>Email: {this.user._id}</Text>
              </View>
            </View>
            <View style={{height: 50}}>
              <View style={styles.item}>
                <Text style={styles.itemtext}>Name: {this.user.name}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      /* </Root> */
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  iconStyle: {
    width: 100,
    height: 100,
		borderRadius: 50,
		alignSelf: 'center',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  col: {
		height: '100%',
    flexDirection: 'column',
		justifyContent: 'space-around',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 25,
  },
  itemtext: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  item: {
		width: '80%',
		alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#5599ff',
  },
});
