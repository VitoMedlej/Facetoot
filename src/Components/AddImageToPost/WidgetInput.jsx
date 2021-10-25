import {Widget} from "@uploadcare/react-widget"
import '../AddImageToPost/WidgetInputStyles.css'
import {MdCancel} from 'react-icons/md'

const WidgetInput = ({openForm,getImageValue}) => {
    const apiKey = `${process.env.REACT_APP_CLOUDINARY}`
    return (
        <div
            className='border border-gray-300 w-80 h-48 flex-wrap  p-2 bg-white right-0 top-full shadow-lg items-center justify-center absolute'>
            <div className='relative flex items-start flex-row-reverse '>
                <button
                    onClick={()=>openForm()}
                    className=' top-0 right-0 p-2 text-red-500 text-2xl cursor-pointer'>
                    <MdCancel/>
                </button>
                <div>
                    <Widget 
                    onChange={(e)=>getImageValue(e)}
                    clearable
                    publicKey={apiKey}/>
                </div>
            </div>
        </div>

    )
}

export default WidgetInput
