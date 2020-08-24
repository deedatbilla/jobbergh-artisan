import { createStore, compose } from "redux";
import rootReducer from "./reducers";
import firebase from "firebase";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDA6KJMOHKHTbOg9v5OuP43Ciex1N_F02Y",
  authDomain: "ghana-market-association.firebaseapp.com",
  databaseURL: "https://ghana-market-association.firebaseio.com",
  projectId: "ghana-market-association",
  storageBucket: "ghana-market-association.appspot.com",
  messagingSenderId: "529522177507",
  appId: "1:529522177507:web:e0649ea899f0141b5d1cd6",
  measurementId: "G-5170H1LNSW",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  fileMetadataFactory: (uploadRes, firebase, metadata, downloadURL) => {
    // upload response from Firebase's storage upload
    const {
      metadata: { name, fullPath }
    } = uploadRes
    // default factory includes name, fullPath, downloadURL
    return {
      name,
      fullPath,
      downloadURL
    }
  }
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
firebase.firestore();

// Create initial state
const initialState = {};

// Create store
export const store = createStore(
  rootReducer,
  initialState,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
