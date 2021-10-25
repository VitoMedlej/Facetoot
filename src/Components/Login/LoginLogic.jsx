import {useFormik} from 'formik';
import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../Auth/initialize'



const LoginLogic = () => {


    const [error,
        SetError] = useState('')
    const [check,
        SetCheck] = useState(false)

    const SignInFN = async(auth, email, password) => {
        try {
            SetCheck(true)
            await signInWithEmailAndPassword(auth, email, password)
            SetCheck(false)
         

        } catch (err) {
            SetError('Invalid Email or Password')
            console.log(err);
            SetCheck(false)
            
        }
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, {resetForm}) => {
            if (!values.email || !values.password) {
                SetError('Invalid email or password')
            }
            if (values.email && values.password) {

                SignInFN(auth, values.email, values.password)
            }

            resetForm({email: '', password: ''});
        }
    });

    return {formik, error, check}
}

export default LoginLogic
