import SignForm from '../Components/SignIn/SignForm'
import myimg from '../Images/mymg2.jpg'

const LoginPage = () => {
    return (
        <div
            className="mt-10  mx-auto flex 2xl:justify-center items-center 2xl:w-3/5 3xl:w-2/4">

            <div className="loginpage  mx-auto  ">

                <div className="text-left pb-8">
                    <h1 className='text-2xl font-bold pb-1'>Welcome!
                    </h1>
                    <h1 className='text-gray-500 font-normal'>

                        Your new friends are waiting!</h1>
                </div>

                <div className="forms">
                <h1 className='font-bold pb-5 text-xl'>Creat An Account</h1>

                    <div className='w-full '>
                     <SignForm/>

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
