 import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import db from '../config'

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super();
    this.state={
      allStories:[],
      dataSource:[],
      search:''
    }
  }
  componentDidMount(){
    this.retriveStories()
  }

  updateSearch = search => {
    this.setState({ search });
  }

  retriveStories = () => {
    try{
      var allStories = []
      var stories = db.collection("stories").get().then((querySnapshot)=> {
        querySnapshot.forEach((doc)=>{
          allStories.push(doc.data())
        })
        this.setState({allStories})
      })
    }
    catch(error){
      console.log(error);
    }
  };

  SearchFilterFunction(text){
    const newData = this.state.allStories.filter((item)=>{
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  render(){
    return(
      <View style={styles.allText}>
      <ImageBackground source={require('../assets/books1.jpg')} style={{flex:1}}>
      <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>StoryHub</Text>
          </TouchableOpacity>
          <View style={{height:20, width:'100%'}}>
          <SearchBar
          placeholder="Search"
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          value={this.state.search}/>
          styles={{backgroundColor:'rgba(255,255,255,0.1)'}}
          </View>
          <FlatList
          data={this.state.search === "" ? this.state.allStories:this.state.dataSource}
          renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.T}> Title : {item.title}</Text>
                    <Text style={styles.T}> Author: {item.author}</Text>
                    
          </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          />
          <Text>Please update the app for seeing the story, if you have submitted</Text>
          </ImageBackground>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  allText: {
   
    flex: 1,
   
  },
  header: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  headerText: {
    fontFamily: 'forte',
    fontSize: 35,
    textAlign: 'center',
    padding: 10,
  },
  itemContainer: {
    height: 55,
    width:'100%',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent:'center',
    alignSelf: 'center',
    marginTop:50,
    borderRadius:12
  },
  T: {
    fontFamily: 'Century Gothic',
    fontSize: 17,
    alignItems:'center',
    justifyContent:'center'
  }
});