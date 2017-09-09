import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Dimensions } from 'react-native';
let { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 25, backgroundColor: '#DDDDDD'}}></View>
        <View style={styles.searchBar}>
        <Image style={styles.menu} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"}} />
          <View style={styles.searchBorder}>
          <Image style={styles.icon} source={{uri:"https://image.flaticon.com/icons/png/512/49/49116.png"}} />
          <TextInput 
          style={{ width: 290, height: 25}}
          placeholder="search"
          underlineColorAndroid="transparent"
          />
          </View>
        </View>

        <Image style={styles.bannerImage} source={{uri:"https://static1.squarespace.com/static/547f29bfe4b0dc192ed7bdac/54aeb15ce4b018c14f34c7cb/54aeb160e4b018c14f34c7ed/1420734817363/san-franc.jpg?format=2500w"}} />

        <View style={styles.randomHeader}>
          <Text style={{ fontSize:20, fontWeight: 'bold' }}>Some Random Header</Text>
        </View>

        <View style={styles.leftRight}>
        <Image style={{flex: 1}} source={{uri:"https://www.wallypark.com/wp-content/uploads/2017/05/ATL_SpringHero.jpg"}} />
        <Image style={{flex: 1}} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/0f/3c/98/18/downtown-salt-lake.jpg"}} />
        </View>

        <View style={styles.paragraph}>
          <Text style={{fontSize: 14}}>This is a bunch of smaller text that is giving information about the two images up above. You might see this kind of a design on a news site.</Text>
        </View>

      <View style={styles.randomHeader}>
      <Text style={{ fontSize:20, fontWeight: 'bold' }}>Some Random Header</Text>
      </View>

      <View style={styles.leftRight}>
      <Image style={{flex: 1}} source={{uri:"https://www.wallypark.com/wp-content/uploads/2017/05/ATL_SpringHero.jpg"}} />
      <Image style={{flex: 1}} source={{uri:"https://media-cdn.tripadvisor.com/media/photo-s/0f/3c/98/18/downtown-salt-lake.jpg"}} />
      </View>

      <View style={styles.paragraph}>
        <Text style={{fontSize: 14}}>This is a bunch of smaller text that is giving information about the two images up above. You might see this kind of a design on a news site.</Text>
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  menu: {
    marginRight: 4,
    height: 25,
    width: 25
  },
  icon: {
    marginTop: 2,
    marginLeft: 2,
    height: 20,
    width: 20
  },
  searchBar: {
    marginTop: 5,
    flexDirection: 'row',
    height: 30
  },
  searchBorder: {
    flex: 1,
    height: 24, 
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1
  },
  bannerImage: {
    paddingTop: 5,
    borderWidth: 1,
    height: 125,
    width: width
  },
  randomHeader: {
    justifyContent: 'space-around',
    height: 55     
  },
  leftRight: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  paragraph: {
    paddingTop: 2,
    width: width,
    marginTop: 10,
    borderWidth: 1
  }
});