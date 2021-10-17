import {useSelector} from 'react-redux'

const CAPuserinfo = () => {
    const userinfo = useSelector(state => state.userInfo.currentUserInfo)


    return (
        <div className=" flex text-center items-center sm:p-2">
            <div className='h-8 w-8 sm:w-10 ml-2 sm:ml-1 sm:h-10 mr-1 sm:mr-2'>
                <img src={`${userinfo.photoURL}`} alt=""/>
            </div>
           
        </div>
    )
}

export default CAPuserinfo
