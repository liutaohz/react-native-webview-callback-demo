/**
 * Domo for v0.0.2 && v0.0.3
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import myEvent from './customNativeApi';
import ReactNativeWebviewCallback from 'react-native-webview-callback';
const {mergeReactNativeApi, useReactNativeAddListener, reactNativeCallH5} =
  ReactNativeWebviewCallback;
const {alert} = Alert;

function App(): JSX.Element {
  const webViewRef: any = useRef(null);
  // 收到消息
  const onMessage = (event: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useReactNativeAddListener({
      bridgeReactNativeApi: mergeReactNativeApi(myEvent), // Merge into custom methods on listening objects
      webViewRef,
      event,
    });
  };
  const handleLoadEnd = () => {
    reactNativeCallH5({
      dataParms: {
        methodName: 'getWebToken', //
        data: '',
      },
      webViewRef: webViewRef,
    })
      .then((data: any) => {
        alert(data || 'Successful data:');
        console.log('Successful data:', data);
      })
      .catch(error => {
        console.log('Failed data:', error);
        alert('Failed from H5 callback');
      });
  };

  return (
    <WebView
      ref={webViewRef}
      source={{
        uri: 'http://192.168.1.121:5173',
      }}
      originWhitelist={['*']}
      allowFileAccess={true}
      onMessage={onMessage}
      onLoadEnd={handleLoadEnd}
      geolocationEnabled={true}
      allowUniversalAccessFromFileURLs={true}
      useWebKit={true}
    />
  );
}

export default App;
