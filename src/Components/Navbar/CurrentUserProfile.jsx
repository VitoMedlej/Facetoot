import {useSelector} from 'react-redux'
const CurrentUserProfile = () => {
    const userinfo = useSelector(state => state.userInfo.currentUserInfo)
       
    return (
        <div className='flex text-center items-center'>
            <div className="w-8 h-8 border rounded-full mx-2">
                <img className="rounded-full w-full h-full" src={`${userinfo && `${userinfo.photoURL}`} `} alt="" />
            </div>
            <h1 className=" font-medium">
                {userinfo.displayName || 'Default User'}

            </h1>

        </div>
    )
}

export default CurrentUserProfile
