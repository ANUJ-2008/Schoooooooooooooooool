import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyBXWJ_GKwXssQ6Sqw_U-AhMzW7bpby20f4",
    authDomain: "school-attendance-98bcf.firebaseapp.com",
    databaseURL: "https://school-attendance-98bcf-default-rtdb.firebaseio.com",
    projectId: "school-attendance-98bcf",
    storageBucket: "school-attendance-98bcf.appspot.com",
    messagingSenderId: "566713575120",
    appId: "1:566713575120:web:a93aed5460a5f8d70360d5"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  
export default firebase.database();
