import firebase from 'firebase'
require("@firebase/firestore");
import "@firebase/firestore";


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD9MNbfX95Kn_l-Fq5Yhpouu4UNGw_6E74",
  authDomain: "bedtimestories-247da.firebaseapp.com",
  projectId: "bedtimestories-247da",
  storageBucket: "bedtimestories-247da.appspot.com",
  messagingSenderId: "91000392898",
  appId: "1:91000392898:web:aca5f9dbaf6887082c7f5b"
};


if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default  firebase.firestore()
