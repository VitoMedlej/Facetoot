import {useFormik } from 'formik';
import CAPuserinfo from './CAPuserinfo';
import MakePost from '../../Hooks/MakePost'
import { useSelector } from 'react-redux'
import {FiSend} from 'react-icons/fi'
import {FcAddImage} from 'react-icons/fc'
import WidgetInput from '../AddImageToPost/WidgetInput';
import {useState} from 'react'
const CAPform = () => {

    const userinfo = useSelector(state => state.userInfo.currentUserInfo)
    const [open ,setOpen] = useState(false)
    const [imageCDN ,SetimageCDN] = useState('')
    
    const formik = useFormik({
        initialValues: {
            PostDetails: ''
        },
        onSubmit: (values, {resetForm} )=> {
            if (!values.PostDetails) {
                return;
            }
            MakePost(values.PostDetails ,userinfo,imageCDN)
            resetForm('')
            SetimageCDN('')
        }
    });
    const openForm =() => {
        setOpen(!open)
    }
    const getImageValue = (e) => {
        SetimageCDN(e.cdnUrl)
     
    }
    return (
        <form
            className='flex flex-col shadow-sm rounded-md  relative w-full bg-white'
            onSubmit={formik.handleSubmit}>
            <div
                className='flex mt-3 text-center items-center pb-3 border-gray-200 border-b '>
                <CAPuserinfo/>

                <input
                    className='formst w-11/12 '
                    placeholder={`What's on your mind ${userinfo.displayName}?`}
                    id="PostDetails"
                    name="PostDetails"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.PostDetails}/>
            </div>

            <div className="w-full sm:pb-2 text-gray-600 flex relative">
                <button type='submit' className='btnst border-r w-2/4 hover:bg-gray-200 flex2'>
                    Post
                    <FiSend className='btnicon mt-1'/>
                </button>
                <button 
                onClick={()=>openForm()}
                type='button' className='w-2/4 btnst relative  hover:bg-gray-200 flex2'>Add Image
                <FcAddImage className='btnicon mt-1'/>
                </button>
              {open ?  <WidgetInput getImageValue={getImageValue} openForm={openForm} /> : ''} 
            </div>
     
        </form>
    );
};
export default CAPform;
