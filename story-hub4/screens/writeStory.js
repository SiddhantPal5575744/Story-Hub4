import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('stories').add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText,
      //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    ToastAndroid.show('Your story is sumitted', ToastAndroid.SHORT);
  };
  render() {
    return (
      <SafeAreaProvider>
      <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding"
        enabled>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require('../assets/Penwriting.jpg')}
            style={styles.image}>
            <Header
              backgroundColor={'rgba(123,123,123,0.1)'}
              centerComponent={{
                text: 'Write Story',
                style: { color: '#fff', fontSize: 27,fontFamily:'Forte' }
              }}
            />
           
            <TextInput
              style={styles.authorBox}
              placeholder="Write the title of the story here"
              onChangeText={(text) => {
                this.setState({
                  title: text,
                });
              }}
              value={this.state.title}
            />
            <TextInput
              style={styles.authorBox}
              placeholder="Write the name of the author here"
              onChangeText={(text) => {
                this.setState({
                  author: text,
                });
              }}
              value={this.state.author}
            />
            <TextInput
              style={styles.storyBox}
              placeholder="Write your story here"
              onChangeText={(text) => {
                this.setState({
                  storyText: text,
                });
              }}
              value={this.state.storyText}
              multiline={true}
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText} onPress={this.submitStory}>
                PUBLISH
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  
   
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'rgba(256,256,256,0.5)',
    fontFamily: 'Century Gothic',
    borderRadius: 15,
    borderWidth: 1,
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
   backgroundColor: 'rgba(256,256,256,0.5)',
    fontFamily: 'Century Gothic',
    borderRadius: 15,
    borderWidth: 1,
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    // backgroundColor: 'yellow',
    width: '50%',
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'impact',
    textAlign: 'center',
    fontSize: 25,
    color:'white'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
