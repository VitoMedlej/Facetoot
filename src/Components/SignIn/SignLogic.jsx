import {useFormik} from 'formik';
import {useState, useEffect} from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from '../../Auth/initialize'
import SaveUser from './SaveUserInfo'

const LoginLogic = () => {
    const photourl = `https://res.cloudinary.com/dweqbyja4/image/upload/v1634239098/defaultuser_ygf4d8.png`

    const [error,
        SetError] = useState('')

    useEffect(() => {
        // clear the error message ONLY if it's not already cleared ,avoid bugs like
        // error msg flashing
        if (!error) {
            setTimeout(() => {
                SetError('')
            }, 2000);
        }

    }, [error])

    const createAccount = async(values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password)
            await updateProfile(auth.currentUser, {
                displayName: `${values.name}`,
                photoURL: `${photourl}`,
            })
            SaveUser(values.name, photourl, auth.currentUser.uid, values.email )

        } catch (err) {
            console.log(err);
            SetError('Error creating account ,Please try again')
        }

    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values, {resetForm}) => {

            if (!values.name || !values.email || !values.password) {
                SetError('Do not leave empty fields!')
                return;
            }

            if (values.password.length < 6 || values.password === `${values.name}`) {
                SetError('Please choose a stronger password')
                resetForm({name: '', email: '', password: ''});
                return;
            }

            if (values.name.length > 4 && values.email && values.password) {
                createAccount(values)

            }

            resetForm({name: '', email: '', password: ''});
        }
    });

    return {formik, error, SetError}
}

export default LoginLogic
