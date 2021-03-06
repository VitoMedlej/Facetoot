import {collection, query, onSnapshot ,orderBy ,limit} from "firebase/firestore";
import {useState, useEffect} from 'react'
import {db} from '../Auth/initialize'

const FetchPosts = () => {
    const [Posts,
        SetPosts] = useState([])
    const [loading,
        SetLoading] = useState(false)

    useEffect(() => {
        const Postsquery = query(collection(db, "Posts"),limit(100))
        const method = onSnapshot(Postsquery, (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
                postsArray.push(doc.data());
            });
            SetPosts(postsArray)
            SetLoading(true)
        });
    
        return method
    }, [])
    return {loading ,Posts}
}

export default FetchPosts
