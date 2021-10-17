import {db} from '../Auth/initialize'
import { addDoc, collection } from "firebase/firestore"; 
import GetDate from './GetDate'
const MakePost = async (postDetails ,userinfo) => {
    const FullPost = {
        PostUid : userinfo.uid,
        PostDetails: postDetails,
        PostDate : new Date(),
        // postImage:postImage,
        PostUserName : userinfo.displayName,
        PostedAtDate: GetDate()
    }
     await addDoc(collection(db, "Posts"), FullPost);
}

export default MakePost
