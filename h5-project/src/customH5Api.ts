// Define your own methods to provide for React Native calls
const getWebToken = () => {
  return new Promise((resolve, reject) => {
    try {
      const token = window.localStorage.getItem('token')||'hello';
      resolve(token) // Successful callback
    } catch (error) {
      reject(error)  // Failed callback
    }
  })
};
// other methods

export default {
  getWebToken: getWebToken,
  // other methods
}