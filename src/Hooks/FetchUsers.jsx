import {useState, useEffect} from 'react'
import {collection, onSnapshot} from "firebase/firestore";
import {db} from '../Auth/initialize'

const FetchUsers = () => {

    const [Users,
        SetUsers] = useState([])

    useEffect(() => {
        const userdata = onSnapshot(collection(db, "Users"), (Snap) => {
            const usersArray = [];
            Snap.forEach((doc) => {
                usersArray.push(doc.data());
            });
            SetUsers(usersArray)
        });
        return userdata
    }, [])

    return {Users}
}

export default FetchUsers
