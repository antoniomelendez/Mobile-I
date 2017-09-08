import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> 
          Header
        </Text>
        <View style={styles.image}>
          image
        </View>

        <View style={styles.button-container}>
          buttons
        </View>
        
        <View style={styles.comment}>
          comments
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {

  }
});
