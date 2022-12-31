import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDivdMQ6bH6AAzhNyJb3BEZKLZ4LitHYAQ',
	authDomain: 'online-store-52dc5.firebaseapp.com',
	projectId: 'online-store-52dc5',
	storageBucket: 'online-store-52dc5.appspot.com',
	messagingSenderId: '35685307906',
	appId: '1:35685307906:web:b0d0e2e59946c1087c791b',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (err) {
			console.log('Error creating the user: ', err.message);
		}
	}
	return userDocRef;
};
