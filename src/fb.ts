import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const app = initializeApp({
  apiKey: import.meta.env.VITE_APP_FB_API_KEY,
  authDomain: import.meta.env.VITE_APP_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FB_APP_ID,
})

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }