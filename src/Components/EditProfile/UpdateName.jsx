import {useFormik} from 'formik';
import {useSelector} from 'react-redux';
import {auth, db} from '../../Auth/initialize'
import {useDispatch} from "react-redux";
import {updateProfile} from 'firebase/auth'
import {updateDoc, doc} from 'firebase/firestore'
import {updateUser} from '../../Redux/UserInfoSlice'

const UpdateName = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userInfo.currentUserInfo)

    const docRef = doc(db, 'Users', `${user.uid}`)

    const UpdateCurrentUserName = async(name) => {
        try {
            if (name && user) {

                await updateProfile(auth.currentUser, {displayName: name})
                await updateDoc(docRef, {displayName: `${name}`})

            }

        } catch (err) {
            console.log(err);
        }

    }

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: (values, {resetForm}) => {
            if (values.name.length > 5) {
                dispatch(updateUser({
                    User: {
                        displayName: values.name,
                        photoURL: user.photoURL,
                        uid: user.uid,
                        email: user.email
                    }
                }))
                UpdateCurrentUserName(values.name)
            }
            resetForm(values.name = '')
        }
    });
    return formik
}

export default UpdateName
