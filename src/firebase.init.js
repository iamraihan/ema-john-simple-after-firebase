// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArlM_lexValc96N88nFgw_XEpull6QW_k",
    authDomain: "ema-john-simple-e4d17.firebaseapp.com",
    projectId: "ema-john-simple-e4d17",
    storageBucket: "ema-john-simple-e4d17.appspot.com",
    messagingSenderId: "206826244982",
    appId: "1:206826244982:web:707e6b4476ff2237c08857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// export default app
export default auth