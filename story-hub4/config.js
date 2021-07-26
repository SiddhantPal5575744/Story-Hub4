import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBZ9Qy1oapVWFB_SyFRcE_fk0u1axhkNLI",
  authDomain: "story-hub-a1c2b.firebaseapp.com",
  projectId: "story-hub-a1c2b",
  storageBucket: "story-hub-a1c2b.appspot.com",
  messagingSenderId: "201297231179",
  appId: "1:201297231179:web:57530d0ff853613792fcce",
  measurementId: "G-XJTSHE1NPG"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.firestore()