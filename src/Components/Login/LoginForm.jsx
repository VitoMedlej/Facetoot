import LoginLogic from "./LoginLogic";
import {useDispatch} from 'react-redux'
import {SignIn} from '../../Redux/RegisterSlice'
import {useRef, useEffect } from "react";



const LoginForm = () => {

    const myForm = useRef()
    useEffect(() => {
        myForm
            .current
            .focus()

    }, [])
    const {formik, error ,check} = LoginLogic()
    

    const dispatch = useDispatch()
    return (

        <form className="flex  flex-col  " onSubmit={formik.handleSubmit}>

            {error
                ? <h1 className='text-center py-2 bg-red-200 mb-1 text-red-700'>{error}</h1>
                : ''}
            <label className="pb-2 " htmlFor="email">Email</label>
            <input
                ref={myForm}
                className='inputs focus:border-blue-600 '
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}/>

            <label className="pb-2 " htmlFor="password">password
            </label>
            <input
                className='inputs focus:border-blue-600'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}/>

            <button 
            disabled={check}
            className='btn1'
             type="submit">Submit</button>

            <h1 className="text-right mt-4">Dont have an account?
                <span
                    onClick={() => dispatch(SignIn())}
                    className="cursor-pointer  text-blue-500 pl-1">Sign Up</span>
            </h1>
        </form>

    );
}

export default LoginForm
