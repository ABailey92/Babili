/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, ImageBackground, TouchableOpacity, Text,
} from 'react-native';

const CameraPreview = ({ photo, retakePicture, savePhoto }) => (
  <View
    style={{
      backgroundColor: 'transparent',
      flex: 1,
      width: '100%',
      height: '100%',
    }}
  >
    <ImageBackground
      source={{ uri: photo && photo.uri }}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          padding: 15,
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            onPress={retakePicture}
            style={{
              width: 130,
              height: 40,

              alignItems: 'center',
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            >
              Take another!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={savePhoto}
            style={{
              width: 130,
              height: 40,

              alignItems: 'center',
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            >
              analyze photo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
);

export default CameraPreview;
