import SignLogic from './SignLogic'
import {useDispatch} from 'react-redux'
import {Login} from '../../Redux/RegisterSlice'
import {useRef, useEffect} from "react";

const LoginForm = () => {
    const {formik, error} = SignLogic()
    const myForm = useRef()
    useEffect(() => {
        myForm
            .current
            .focus()

    }, [])

    const dispatch = useDispatch()
    return (

        <form className="flex  flex-col  " onSubmit={formik.handleSubmit}>
            {error
                ? <h1 className='text-center py-2 bg-red-200 mb-1 text-red-700'>{error}</h1>
                : ''}
            <label className="pb-2 " htmlFor="email">Name</label>
            <input
                required
                ref={myForm}
                className='inputs focus:border-blue-600'
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}/>
            <label className="pb-2 " htmlFor="email">Email</label>
            <input
                 required
                className='inputs focus:border-blue-600'
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}/>

            <label className="pb-2 " htmlFor="password">password
            </label>
            <input
                 required
                className='inputs focus:border-blue-600'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}/>

            <button className='btn1' type="submit" disabled={false}>Submit</button>
            <h1 className="text-right mt-4 ">Already have an account?
                <span
                    onClick={() => dispatch(Login())}
                    className="cursor-pointer  text-blue-500 pl-1">Login</span>
            </h1>
        </form>

    );
}

export default LoginForm
