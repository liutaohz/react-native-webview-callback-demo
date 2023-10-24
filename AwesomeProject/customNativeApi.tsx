import {
  Platform,
  // Share,
} from 'react-native';
// Define your own methods to provide for H5 calls
const getAppInfo = () => {
  return new Promise((resolve, reject) => {
    try {
      const result = {
        os: Platform.OS,
        version: Platform.Version,
      };
      resolve(result); // Successful callback
    } catch (error) {
      reject(error); // Failed callback
    }
  });
};
// other methods
// const appShare = () => {
//   return new Promise((resolve, reject) => {
//     Share.share({
//       message:
//         'React Native | A framework for building native apps using React',
//     }).then(result => {
//       resolve(result); // Successful callback
//     }).catch(error => {
//       reject(error); // Failed callback
//     })
//   });
// };

export default {
  getAppInfo: getAppInfo,
  // other methods
};