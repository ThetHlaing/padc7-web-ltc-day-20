  import firebase from 'firebase'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDojEU-6gHvRwIr9g558tvl7EqNWpYbsAI",
    authDomain: "my-react-project-2a972.firebaseapp.com",
    databaseURL: "https://my-react-project-2a972.firebaseio.com",
    projectId: "my-react-project-2a972",
    storageBucket: "my-react-project-2a972.appspot.com",
    messagingSenderId: "1056687020869"
  };
  firebase.initializeApp(config);

  export default firebase.firestore();