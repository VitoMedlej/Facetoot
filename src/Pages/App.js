import AuthPage from "./AuthPage";
import FeedPage from "./FeedPage";
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useEffect, useState} from 'react'
import {auth} from '../Auth/initialize'
import {useDispatch} from "react-redux";
import {userReady} from '../Redux/CurrentUserSlice'
import {useSelector} from 'react-redux'
import {updateUser} from '../Redux/UserInfoSlice.jsx'

function App() {
    const dispatch = useDispatch()
    const [currentUser,
        SetCurrentUser] = useState(null)

    // const UserIsReady = useSelector(state => state.user.currentUser) const
    const userinfo = useSelector(state => state.userInfo.currentUserInfo)

    useEffect(() => {
        console.log(userinfo);
    },[userinfo]);

    onAuthStateChanged(auth, user => {
        if (user) {
            setTimeout(() => {
                SetCurrentUser(user)
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
          
        }
    })

    // useEffect(() => {

    //     if (currentUser) {
    //         dispatch(updateUser({
    //             User: {
    //                 displayName: currentUser.displayName,
    //                 photoURL: currentUser.photoURL,
    //                 uid: currentUser.uid,
    //                 email: currentUser.email
    //             }
    //         }))
    //     }
    // }, [auth.currentUser])

    return (
        <section>

            {currentUser
                ? <FeedPage/>
                : <AuthPage/>}
        </section>

    );
}

export default App;
