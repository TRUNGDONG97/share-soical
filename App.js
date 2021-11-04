/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   Alert,
   Button,
   Platform,
   TextInput,
   StyleSheet,
   Text,
   View,
 } from 'react-native';

 import Share from 'react-native-share';

 import images from './images/imagesBase64';
 import pdfBase64 from './images/pdfBase64';

 const App = () => {
   const [packageSearch, setPackageSearch] = useState<string>('');
   const [recipient, setRecipient] = useState<string>('');
   const [result, setResult] = useState<string>('');

   /**
    * You can use the method isPackageInstalled to find if a package is installed.
    * It returns an object { isInstalled, message }.
    * Only works on Android.
    */
   const checkIfPackageIsInstalled = async () => {
     const {isInstalled} = await Share.isPackageInstalled(packageSearch);

     Alert.alert(
       `Package: ${packageSearch}`,
       `${isInstalled ? 'Installed' : 'Not Installed'}`,
     );
   };

   function getErrorString(error, defaultValue) {
     let e = defaultValue || 'Something went wrong. Please try again';
     if (typeof error === 'string') {
       e = error;
     } else if (error && error.message) {
       e = error.message;
     } else if (error && error.props) {
       e = error.props;
     }
     return e;
   }


   const shareEmailImage = async () => {
     const shareOptions = {
       title: 'Share file',
       email: 'letrungdong@gmail.com.vn',
       social: Share.Social.EMAIL,
       failOnCancel: false,
       message:"test",
       url: images.image1,
     };

     try {
       const ShareResponse = await Share.shareSingle(shareOptions);
       setResult(JSON.stringify(ShareResponse, null, 2));
     } catch (error) {
       console.log('Error =>', error);
       setResult('error: '.concat(getErrorString(error)));
     }
   };
   const shareWhatsapp = async () => {
    const shareOptions = {
      title: 'Share file',
      social: Share.Social.WHATSAPP,
      failOnCancel: false,
      message:"test",
      url: images.image1,
      whatsAppNumber: "0084329563942" // country code + phone number
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', error);
      setResult('error: '.concat(getErrorString(error)));
    }
  };
   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>Welcome to React Native Share Example!</Text>
       <View style={styles.optionsRow}>
         <View style={styles.button}>
           <Button onPress={shareEmailImage} title="Share Social: Email" />
         </View>
         <View style={styles.button}>
           <Button onPress={shareWhatsapp} title="Share Social: Whatsapp" />
         </View>
         <Text style={styles.resultTitle}>Result</Text>
         <Text style={styles.result}>{result}</Text>
       </View>
     </View>
   );
 };

 const styles = StyleSheet.create({
   button: {
     marginBottom: 10,
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   textInput: {
     borderBottomColor: '#151313',
     borderBottomWidth: 1,
     marginRight: 10,
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   resultTitle: {
     marginTop: 20,
     fontSize: 20,
   },
   result: {
     fontSize: 14,
     margin: 10,
   },
   optionsRow: {
     justifyContent: 'space-between',
   },
   withInputContainer: {
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'row',
   },
 });

 export default App;
