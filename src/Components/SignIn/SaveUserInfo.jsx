import {doc, setDoc} from "firebase/firestore";
import {db} from '../../Auth/initialize'

const SaveUser = async (displayName, photoURL, uid, email) => {

    try {
        await setDoc(doc(db, "Users" ,`${uid}`), {
          displayName: displayName,
          photoURL: photoURL,
          uid: uid,
          email: email
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default SaveUser
