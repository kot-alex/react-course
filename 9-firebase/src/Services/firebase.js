import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCnIT8YhugLbaef2p4Xq_t8AIhPjUWGJmc",
    authDomain: "project-react-a8f87.firebaseapp.com",
    databaseURL:
        "https://project-react-a8f87-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-react-a8f87",
    storageBucket: "project-react-a8f87.appspot.com",
    messagingSenderId: "7400958807",
    appId: "1:7400958807:web:58ea01b4eda2cb313a2c12",
};

firebase.initializeApp(firebaseConfig);
