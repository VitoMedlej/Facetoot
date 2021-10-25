import {MdCancel} from 'react-icons/md'

const EditProfileButton = ({SetOpen}) => {
    return (
        <div>
        <h1 className="border-b border-gray-300 pb-2 font-medium">Edit Profile</h1>
            <MdCancel 
            onClick={()=>SetOpen(false)}
            className='text-red-500 absolute top-0 right-0 m-5 w-11 h-8  text-2xl cursor-pointer'/>
        </div>
    )
}

export default EditProfileButton
