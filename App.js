import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Tag = 'WS';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { connected: false };
    window.navigator.userAgent = 'react-native';
  }

  _connectSocket = () => {
    this.ws = new WebSocket('ws://104.236.168.186:3000');
    this.ws.onerror = (e) => {
      console.log(Tag, 'Error', e.message);
    };

    this.ws.onopen = (ws, event) => {
      console.log(Tag, "Socket open");
    };

    this.ws.onclose = () => {
      console.log(Tag, "Socket closed");
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button 
          title = 'Connect'
          onPress = { this._connectSocket } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
