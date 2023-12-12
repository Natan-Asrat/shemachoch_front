import{initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC3IFTgyl67upct0e_xwhfYnjj9MdB_Xqo",
//   authDomain: "shemachoch-4cf9a.firebaseapp.com",
//   projectId: "shemachoch-4cf9a",
//   storageBucket: "shemachoch-4cf9a.appspot.com",
//   messagingSenderId: "752516652155",
//   appId: "1:752516652155:web:62e64fe4cb02e52fd6d6de",
//   measurementId: "G-WEELZVH7L3"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDmXwW8P6wySv10r1QmlfrKxbxC9wHHrGo",
  authDomain: "shemachoch-2.firebaseapp.com",
  projectId: "shemachoch-2",
  storageBucket: "shemachoch-2.appspot.com",
  messagingSenderId: "502724371308",
  appId: "1:502724371308:web:9e09713b1cca7e94298949",
  measurementId: "G-E2VYHJ1TS6"
};


const app =initializeApp(firebaseConfig);

export const auth = getAuth(app);



