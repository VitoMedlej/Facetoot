import LoginForm from '../Components/Login/LoginForm'
import myimg from '../Images/mymg.jpg'
import {useState, useEffect} from 'react'

const LoginPage = () => {

    const [loading,
        Setload] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            Setload(false)
        }, 3000);
    }, [loading])

    return (
        <div
            className="mt-10  mx-auto flex 2xl:justify-center items-center   2xl:w-3/5 3xl:w-2/4">

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
                </div>
            </div>
            <div className="hidden lg:block">
                <img src={myimg} alt=""/>
            </div>

        </div>
    )

};

export default LoginPage
