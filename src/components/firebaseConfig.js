import{initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3IFTgyl67upct0e_xwhfYnjj9MdB_Xqo",
  authDomain: "shemachoch-4cf9a.firebaseapp.com",
  projectId: "shemachoch-4cf9a",
  storageBucket: "shemachoch-4cf9a.appspot.com",
  messagingSenderId: "752516652155",
  appId: "1:752516652155:web:62e64fe4cb02e52fd6d6de",
  measurementId: "G-WEELZVH7L3"
};


const app =initializeApp(firebaseConfig);

export const auth = getAuth(app);



