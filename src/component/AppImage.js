import React, {useState} from 'react';
import {ActivityIndicator, PixelRatio, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function AppImage({uri, imgStyle, resizeMode}) {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  return (
    <View style={imgStyle}>
      <FastImage
        style={imgStyle}
        onLoadStart={() => {
          setLoading(true);
        }}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        source={{
          uri,
        }}
        resizeMode={resizeMode || 'contain'}
      />
      {!loading && err && (
        <View
          style={[
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              justifyContent: 'center',
              alignContent: 'center',
            },
            imgStyle,
          ]}></View>
      )}
      {loading && (
        <View
          style={[
            {
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              justifyContent: 'center',
              alignContent: 'center',
            },
            imgStyle,
          ]}>
          <ActivityIndicator size="small" color={'blue'} />
        </View>
      )}
    </View>
  );
}
