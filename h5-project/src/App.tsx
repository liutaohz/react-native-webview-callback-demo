/**
 * Domo for v0.0.4 && v0.0.5
 */
import { useEffect, useState } from 'react'
import { useH5AddListener, mergeH5Api, h5CallreactNative } from 'react-native-webview-callback';
import myEvent from './customH5Api';
function App() {
  useH5AddListener(mergeH5Api(myEvent)) // just need init once ,Entry file
  useEffect(() => {
    window.localStorage.setItem('token', 'mytokenStrXXXXX');// mock data
  },[])
  const [result, setResult] = useState('--');
  const testFn = () => {
    h5CallreactNative({
      methodName: "getAppInfo", // Or other interface functions that you customize on the React Native end， eg:“myReactNativeMethod”
      data: "", // Object data can also be passed, and the specific parameter format depends on the defined interface parameters
    })
      .then((data) => {
        if (typeof data === 'object') {
          setResult(JSON.stringify(data))
        } else if (typeof data === 'string') { 
          setResult(data)
        }
        console.log("Successful data:", data);
      })
      .catch((error) => {
        alert("Failed from React Native callback");
        console.error("Failed data:", error);
      });
  }
  return (
    <>
      <h1>H5</h1>
      <div className="card">
        <button onClick={testFn}>
          click to getAPPInfo
        </button>
        <p>
          {result}
        </p>
      </div>
    </>
  )
}

export default App
