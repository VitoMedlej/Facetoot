import {db} from '../Auth/initialize'
import { setDoc, doc ,serverTimestamp } from "firebase/firestore"; 
import date from 'date-and-time';
import uniqid from 'uniqid';

const MakePost = async (postDetails ,userinfo ,postImage) => {
    const now = new Date()
    const PostUniqueId =  uniqid()
    const seconds = now.getSeconds()
    const milliseconds = new Date().getMilliseconds()
    const FullPost = {
        PostUserId : userinfo.uid,
        PostUniqueId: PostUniqueId,
        PostDetails: postDetails,
        PostDate : date.format(now, 'YYYY/MM/DD HH:mm:ss'),
        postImage:postImage,
        likes:[],
        PostUserName : userinfo.displayName,
        PostedAtDate: `${new Date().getTime()}${seconds}${milliseconds}`,
        timestamp: serverTimestamp()
    }
     await setDoc(doc(db, "Posts" ,`${PostUniqueId}`), FullPost);
}

export default MakePost
