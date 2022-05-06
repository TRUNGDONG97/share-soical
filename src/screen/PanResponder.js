import React, {useRef, useState, useEffect} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import AppImage from '../component/AppImage';

const PanResponderScreen = () => {
  const [data, setData] = useState(new Array(10000));
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    // console.log('effect');
    // data['test'] = 'c';
    // console.log('data', data);
    // return () => {
    //   console.log("cleanup");
    // };
  });

  function renderItem({item, index, separators}) {
    return (
      <TouchableOpacity
        style={{padding: 20}}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
        onPress={() => {
          setIndex(index);
        }}>
        <AppImage
          imgStyle={{height: 200, width: 300}}
          uri="https://wallpaperaccess.com/full/1320732.jpg"
        />
        <Text style={{height: 20}}>{index}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView>
      <Button
        // onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"></Button>
      <TouchableOpacity
        style={{height: 50, width: 200, backgroundColor: 'red'}}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <FlatList
        renderItem={renderItem}
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => <View style={[highlighted && {marginLeft: 0}]} />)
        }
        data={data}
        keyExtractor={(item, index) => index}
        // initialScrollIndex={9000}
        // inverted={-1}
        initialNumToRender={2}
        getItemLayout={(data, index) => ({
          length: 40,
          offset: 50 * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default PanResponderScreen;
