import DDMbuttons from "./DDMbuttons"
import {FiSettings} from 'react-icons/fi'
import {BiLogIn} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
const DropDownMenu = ({user, signOutfn }) => {
  
    return (

        <div className={`border border-gray-300   DDMstlye `}>
            <div className="pl-2 pt-2 ">
                <div className="hover:bg-gray-200 DDMuserProfileStyles">
                    <div className='w-12 h-12 rounded-full'>
                        <img className="w-full rounded-full h-full" src={user.photoURL} alt=""/>
                    </div>
                    <div className='flex flex-col text-left pl-3'>
                        <Link to={`/profile/${user.uid}`}>
                        <h1 className=' font-medium'>{user.displayName}</h1>
                        <h1 className=' text-sm text-gray-500'>See your profile</h1>
                        </Link>
                   
                    </div>
                </div>
                <Link to='/'>
                <DDMbuttons
                    text={'Home'}
                    iconStyle={'ml-1'}
                    className='border-b border-gray-200 '>
                    <AiOutlineHome className='DDMicon'/>
                </DDMbuttons>
                </Link>
             
                <DDMbuttons
                    text={'Settings'}
                    iconStyle={'ml-1'}
                    className='border-b border-gray-200 '>
                    <FiSettings className='DDMicon'/>
                </DDMbuttons>

                <DDMbuttons onClick={()=> signOutfn()} text={'Logout'}>
                    <BiLogIn className='DDMicon'/>
                </DDMbuttons>

                <div></div>
            </div>
        </div>
    )
}

export default DropDownMenu
