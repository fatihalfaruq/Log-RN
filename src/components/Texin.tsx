import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Component} from 'react';

interface State {
  mata: boolean;
}

interface Props {}

export default class Texin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mata: true,
    };
  }
  render() {
    return (
      <View>
        <TextInput placeholder="Email..." style={styles.inp} />
        <View style={styles.gar}></View>

        <View style={styles.coney}>
          <TextInput
            placeholder="Pasword..."
            secureTextEntry={this.state.mata}
            style={styles.inp2}
          />
          <TouchableOpacity
            onPress={() => this.setState({mata: !this.state.mata})}>
            <Image
              style={styles.mata}
              source={require('../assets/icon/eye.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.gar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inp: {width: 408, marginTop: 50, fontSize: 20},
  inp2: {width: 380, fontSize: 20},
  mata: {width: 30, height: 30, marginTop: 10},
  coney: {flexDirection: 'row'},
  gar: {backgroundColor: '#d1d8e0', height: 2, width: '100%'},
});
