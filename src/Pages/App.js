import AuthPage from "./AuthPage";
import FeedPage from "./FeedPage";
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useEffect, useState} from 'react'
import {auth} from '../Auth/initialize'
import {useDispatch} from "react-redux";

import {updateUser ,updateCreatedAT} from '../Redux/UserInfoSlice'

function App() {
    const dispatch = useDispatch()
    const [currentUser,
        SetCurrentUser] = useState(null)
    
    // const userinfo = useSelector(state => state.userInfo.currentUserInfo)
    
  

    onAuthStateChanged(auth, user => {
       
        if (user) {
            setTimeout(() => {
                SetCurrentUser(user)
                dispatch(updateCreatedAT(user.metadata.creationTime))
                dispatch(updateUser({
                    User: {
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        uid: user.uid,
                        email: user.email
                    }
                }))
            }, 700);
        } else {
            SetCurrentUser(null)
            dispatch(updateUser({
                User: {
                    displayName: null,
                    photoURL: null,
                    uid: null,
                    email: null
                }
            }))
        }
    })

    return (
        <section>

            {currentUser
                ? <FeedPage/>
                : <AuthPage/>}
        </section>

    );
}

export default App;
