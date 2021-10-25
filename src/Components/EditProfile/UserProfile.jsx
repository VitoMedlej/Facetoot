import EditNameForm from "./EditNameForm"
import {Widget} from "@uploadcare/react-widget"
import {updateDoc, doc} from 'firebase/firestore'
import {updateUser} from '../../Redux/UserInfoSlice'
import { useDispatch } from "react-redux"
import {auth ,db} from '../../Auth/initialize'
import {updateProfile} from 'firebase/auth'


const UserProfile = ({user}) => {
    
    const apiKey = `${process.env.REACT_APP_CLOUDINARY}`
    const dispatch = useDispatch()
    const docRef = doc(db, 'Users', `${user.uid}`)

    const UpdateUserImage = async (url) => {
        await updateProfile(auth.currentUser, {photoURL: url})
        await updateDoc(docRef, {photoURL: `${url}`})
    }
    const GetProfileImage = (e)=>{
        dispatch(updateUser({
            User: {
                displayName: user.displayName,
                photoURL: `${e.cdnUrl}`|| user.photoURL,
                uid: user.uid,
                email: user.email
            }
        }))
        UpdateUserImage(e.cdnUrl)
    }

    return (
        <>
    <div className='text-left mt-12 flex flex-col'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-gray-600'>Profile picture</h1>
                    <Widget 
                    onChange={(e)=>GetProfileImage(e)}
                    publicKey={apiKey}/>
                </div>
                <div className='w-40  h-40 flex my-3 mx-auto  rounded-full items-center'>
                    <img src={user.photoURL} alt="" className="w-full h-full rounded-full"/>
                </div>
            </div>
        </div>
  
        <div className='text-left mt-8 flex flex-col pb-3'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-gray-600'>Dispaly name</h1>
                </div>
                <EditNameForm user={user}/>
            </div>
        </div>
            
        </>
    )
}

export default UserProfile
