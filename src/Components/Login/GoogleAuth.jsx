import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from '../../Auth/initialize'

const GoogleAuth = () => {
    const provider = new GoogleAuthProvider();

    const SignInPopUp = async() => {
        try {
            const signin = await signInWithPopup(auth, provider)
            const result = await signin
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log('credential: ', credential);
            console.log('result: ', result);
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            console.log('email: ', email);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
    }
    return SignInPopUp

}


export default GoogleAuth
