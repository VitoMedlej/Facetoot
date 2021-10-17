import {useFormik } from 'formik';
import CAPuserinfo from './CAPuserinfo';
import MakePost from '../../Hooks/MakePost'
import { useSelector } from 'react-redux'
import {FiSend} from 'react-icons/fi'
import {FcAddImage} from 'react-icons/fc'

const CAPform = () => {

    const userinfo = useSelector(state => state.userInfo.currentUserInfo)
    
    const formik = useFormik({
        initialValues: {
            PostDetails: ''
        },
        onSubmit: (values, {resetForm} )=> {
            if (!values.PostDetails) {
                return;
            }
            MakePost(values.PostDetails ,userinfo)
            resetForm('')
        }
    });
    return (
        <form
            className='flex flex-col shadow-sm rounded-md  w-full bg-white'
            onSubmit={formik.handleSubmit}>
            <div
                className='flex mt-3 text-center items-center pb-3 border-gray-200 border-b '>
                <CAPuserinfo/>

                <input
                    className='formst w-11/12 '
                    placeholder={`What's on your mind ${ 'user'}?`}
                    id="PostDetails"
                    name="PostDetails"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.PostDetails}/>
            </div>

            <div className="w-full sm:pb-2 text-gray-600 flex ">
                <button type='submit' className='btnst border-r w-2/4 hover:bg-gray-200 flex2'>
                    Post
                    <FiSend className='btnicon mt-1'/>
                </button>
                <button type='button' className='w-2/4 btnst hover:bg-gray-200 flex2'>Add Image
                <FcAddImage className='btnicon mt-1'/>
                </button>
            </div>

        </form>
    );
};
export default CAPform;
