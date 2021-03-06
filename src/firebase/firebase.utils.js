import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpAuVc2U2rfQ3kOmZHlamUSTJC2_mSYqw",
    authDomain: "crwn-db-e03d8.firebaseapp.com",
    databaseURL: "https://crwn-db-e03d8.firebaseio.com",
    projectId: "crwn-db-e03d8",
    storageBucket: "crwn-db-e03d8.appspot.com",
    messagingSenderId: "378155362203",
    appId: "1:378155362203:web:8dd8dac3713486a0f5e33e",
    measurementId: "G-7JX2H94VSD"
  }

export const createUserProfileDocument = async (userAuth,additionalData) => {
 if (!userAuth) return;

 const userRef = filestore.doc(`users/${userAuth.uid}`);
 const snapShot = await userRef.get();

 if (!snapShot.exists) {
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData

    })
  } catch (error) {
    console.log('Error creating user',error.message);
  }

 }
 return userRef
}

export const addCollectionAndDocuments = async (collectionKey,objectToAdd) => {
  const collectionRef = filestore.collection(collectionKey);
  const batch = filestore.batch();
  objectToAdd.forEach( obj => {
    const  newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  })

  return await batch.commit();
}

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const {title,items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })
    
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator
    },{});
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const filestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;