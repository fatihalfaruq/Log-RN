import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import React, {Component} from 'react';
import BottomLogReg from '../components/BottomLogReg';
import Texin from '../components/Texin';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.con}>
        <Image style={styles.img} source={require('../assets/image/e.png')} />
        <Text style={styles.Log}>Login</Text>
        <Text style={styles.tx}>silahkan login</Text>
        <Text style={styles.tx2}>selamat datang di ipon store</Text>

        <Texin />

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
  tx: {marginTop: 20, fontSize: 15},
  tx2: {fontSize: 15},
  contex: {flexDirection: 'row'},
  t1: {color: 'black'},
  t2: {color: 'blue'},
});
