
// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYrJRPAtvlWqZyn13_O75ZEeW3Xii5Nw8",
  authDomain: "zoxta-cf336.firebaseapp.com",
  projectId: "zoxta-cf336",
  storageBucket: "zoxta-cf336.appspot.com",
  messagingSenderId: "170053701235",
  appId: "1:170053701235:web:2b61745dd5e5ef5f226406"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
