import * as firebase from 'firebase';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  getDocs, 
  updateDoc, 
  DocumentData
} from "firebase/firestore";
import { 
  getDownloadURL, 
  getStorage, 
  ref, 
  updateMetadata, 
  uploadBytes 
} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  const app = firebase.initializeApp(firebaseConfig);
  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(app);
  // Initialize Firestore Database
  const db = getFirestore(app);

export default {app, storage, db};