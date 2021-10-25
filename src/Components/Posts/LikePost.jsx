import {doc, updateDoc} from "firebase/firestore";
import {db} from '../../Auth/initialize'


const LikePost = () => {
 
    const updateLikes = async (postId,likesArray ,liker) => {    
        const postRef = doc(db, "Posts", `${postId}`);
        const UserAlreadyLiked = likesArray.includes(liker) 
        if (UserAlreadyLiked) {
            const unlikedArray = likesArray.filter(a => a !== liker);
            await updateDoc(postRef, {likes: unlikedArray});
            return;
        }
        else {
            likesArray.push(liker);
            await updateDoc(postRef, {likes: likesArray });
        }
    }

    return {updateLikes}
}

export default LikePost
