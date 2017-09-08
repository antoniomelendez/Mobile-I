import React from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Header</Text>
        <Image style={styles.image} source={{uri:"https://unsplash.it/400/?image=1065"}}></Image>
        <View style={styles.buttonContainer}>
          <Button title='Like'/>
          <Button title='Share'/>
          <Button title='Comment'/>
        </View>
        <View style={styles.comment}>
        <FlatList
          data={[
            {key: 'Some User:',
            comment: 'A comment on the picture'
            },
            {key: 'Another User:',
            comment: 'A comment on the picture'
            },
            {key: 'And Another User:',
            comment: 'A comment on the picture'
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key} {item.comment}</Text>}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    marginTop: 50,
    width: 415,
    height: 50,
    textAlign: 'center',
    fontSize: 24
  },
  image: {
    width: 415,
    height: 415
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 25,
    width: 300,
  },
  comment: {
    flex: 1,
    width: 400,
    height: 50,
    fontSize: 20,
    justifyContent: 'space-around'
  },
  item: {
    fontSize: 16,
    justifyContent: 'space-between',
    borderWidth: 1
  }
});
