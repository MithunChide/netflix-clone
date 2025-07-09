// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
   createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import { 
  addDoc,
  collection, 
  getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD2n5KuDfa3NyP7Nj66zwC1-h72TulFxCw",
  authDomain: "netflix-clone-8d520.firebaseapp.com",
  projectId: "netflix-clone-8d520",
  storageBucket: "netflix-clone-8d520.firebasestorage.app",
  messagingSenderId: "1048547478184",
  appId: "1:1048547478184:web:3b1e535a91d97c2550509d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db,"user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,

    })

    //  // Now attempt login explicitly with same credentials
    // const loginRes = await signInWithEmailAndPassword(auth, email, password);
    // console.log('User logged in:', loginRes.user);

  } catch (error) {
        console.log('Error during signup/login:', error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error)
         toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
  signOut(auth)
}

export {auth, db, login, signup, logout}

