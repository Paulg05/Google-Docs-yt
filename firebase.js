import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAK_hLS3vqlf9tZhQfJZsH6AbhpG6BW1R8",
  authDomain: "docs-yt-23343.firebaseapp.com",
  projectId: "docs-yt-23343",
  storageBucket: "docs-yt-23343.appspot.com",
  messagingSenderId: "827445679516",
  appId: "1:827445679516:web:acf03984462bfb29a76459",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
