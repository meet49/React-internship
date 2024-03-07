import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD4tP_nCQZbiGSKSfsy-DEnCwb4Y11Yq4s",
    authDomain: "logi-c970d.firebaseapp.com",
    projectId: "logi-c970d",
    storageBucket: "logi-c970d.appspot.com",
    messagingSenderId: "933770844574",
    appId: "1:933770844574:web:4895ca71642a308c06de8f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }