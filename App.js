/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  Platform,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import ImgToBase64 from 'react-native-image-base64';
const App: () => Node = () => {
  const refViewShot = useRef('initialValue');
  const [urlImage, setUrlImage] = useState('');

  const screenShot = async () => {
    console.log('refViewShot', refViewShot.current);

    try {
      let url = await refViewShot.current.capture();
      console.log('irl',url);
      let imageBase64 = await ImgToBase64.getBase64String(url);
      alert('Screenshot is success.');
      setUrlImage(imageBase64);
    } catch (error) {
      alert(error);
    }
  };

  const share = async () => {
    // console.log(urlImage, 'urlImage');
    try {
      const shareOption = {
        url: 'data:image/png;base64,' + urlImage,
        filename:"test.png",
        type: 'image/png',
      };

      const responseShare = await Share.open(shareOption);
      console.log('responseShare', JSON.stringify(responseShare));
    } catch (error) {
      console.log('errror', error);
    }
  };

  return (
    <ViewShot
      ref={refViewShot}
      options={{format: 'png', quality: 0.9}}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'blue'}}>

      <TouchableOpacity
        onPress={screenShot}
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>screenShot</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={share}
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginTop: 30,
        }}>
        <Text style={{color: 'white'}}>Share</Text>
      </TouchableOpacity>
    </ViewShot>
  );
};

export default App;
