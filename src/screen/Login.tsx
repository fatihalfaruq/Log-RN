import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import BottomLogReg from '../components/BottomLogReg';

interface State {
  mata: boolean;
}

interface Props {}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mata: true,
    };
  }
  render() {
    return (
      <View style={styles.con}>
        <Image style={styles.img} source={require('../assets/image/e.png')} />
        <Text style={styles.Log}>Login</Text>
        <Text style={styles.tx}>silahkan login</Text>
        <Text style={styles.tx2}>selamat datang di ipon store</Text>
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
        <BottomLogReg title="sign in" />

        <View style={styles.contex}>
          <Text style={styles.t1}>Don't have an account?</Text>
          <Text style={styles.t2}>Create account</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  con: {alignItems: 'center'},
  img: {width: 90, height: 90, marginTop: 60},
  Log: {fontSize: 35, fontWeight: 'bold', color: 'black'},
  inp: {width: 408, marginTop: 50, fontSize: 20},
  inp2: {width: 380, fontSize: 20},
  tx: {marginTop: 20, fontSize: 15},
  tx2: {fontSize: 15},
  gar: {backgroundColor: '#d1d8e0', height: 2, width: '100%'},
  contex: {flexDirection: 'row'},
  t1: {color: 'black'},
  t2: {color: 'blue'},
  mata: {width: 30, height: 30, marginTop: 10},
  coney: {flexDirection: 'row'},
});
