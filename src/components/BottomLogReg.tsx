import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
interface Props {
  title: string;
}
export default class BottomLogReg extends Component<Props> {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.in}>
        <TouchableOpacity>
          <Text style={styles.ind}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  in: {
    marginTop: 260,
  },
  ind: {
    color: 'white',
    backgroundColor: 'blue',
    paddingHorizontal: '30%',
    paddingVertical: 15,
    borderRadius: 15,
    fontSize: 20,
  },
});
