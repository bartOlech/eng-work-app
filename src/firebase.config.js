import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZykeAFLH77WPFdb8pPWPTUBKctbeDfyM",
  authDomain: "prac-inz-app.firebaseapp.com",
  databaseURL: "https://prac-inz-app.firebaseio.com",
  projectId: "prac-inz-app",
  storageBucket: "prac-inz-app.appspot.com",
  messagingSenderId: "47307301250",
  appId: "1:47307301250:web:63c06a92058edc658eaf9b",
  measurementId: "G-60B9X6ED37"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)

    this.auth = app.auth()
    this.db = app.firestore()

    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
  }

  signInWithGoogle () {
    return this.auth.signInWithPopup(this.googleProvider)
  }

  signInWithFacebook () {
    return this.auth.signInWithPopup(this.facebookProvider)
  }

  logout () {
    return this.auth.signOut()
  }

  getCurrentUid () {
    return this.auth.currentUser && this.auth.currentUser.uid
  }
  
  // Get user data
  getCurrentUser () {
    return this.auth.currentUser && this.auth.currentUser.email
  }
}

export default new Firebase()