/** Comments
 *   Screen3 Component
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Screen3 extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 3 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});