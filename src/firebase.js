// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAedsBzFV2avLjea70vl3Pp3CTpY7qxDwA",
	authDomain: "disney-plus-clone-c6e1f.firebaseapp.com",
	projectId: "disney-plus-clone-c6e1f",
	storageBucket: "disney-plus-clone-c6e1f.appspot.com",
	messagingSenderId: "766368938948",
	appId: "1:766368938948:web:ada9d63fe07c408551c291",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
