import LoginForm from '../Components/Login/LoginForm'
import myimg from '../Images/mymg.jpg'
import GoogleAuth from '../Components/Login/GoogleAuth';
import {useState} from 'react'

const LoginPage = () => {
    const [loading,
        Setload] = useState(false)
    const SignInPopUp = GoogleAuth()
    return (
        <div
            className="mt-10  mx-auto flex 2xl:justify-center items-center 2xl:w-3/5 3xl:w-2/4">

            <div className="loginpage  mx-auto  ">

                <div className="text-left pb-8 ">
                    <h1 className='text-2xl font-bold pb-1'>Welcome Back!
                    </h1>
                    <h1 className='text-gray-500 font-normal'>Your friends missed you!</h1>
                </div>

                <div className="forms shadow-xl">
                    <h1 className='font-bold pb-5 text-xl'>Login With Account</h1>
                    <div className='w-full '>
                        <LoginForm/>

                    </div>
                    <h1 className="my-4 ">Or</h1>

                    <button
                    disabled={loading ? true : false}
                        onClick={() =>{ SignInPopUp() 
                             Setload(true)}}
                        className="p-2 w-2/3 text-blue-500 border-blue-500  border
                                    rounded-full ">Sign Up With Google</button>

                </div>
            </div>
            <div className="hidden lg:block">
                <img src={myimg} alt=""/>
            </div>

        </div>
    )

};

export default LoginPage
