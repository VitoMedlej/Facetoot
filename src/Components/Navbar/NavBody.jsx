import CurrentUserProfile from './CurrentUserProfile';
import NavInput from './NavInput';
import {AiOutlineCaretDown} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'

const NavBody = ({signOutfn}) => {
    
    return (
        <nav className=" h-14 w-full  shadow-md bg-white">
            <div className="flexed  h-full justify-between mx-auto">
                <div className="logo margined blue font-medium flexed">
                    <h1 className="blue text-lg font-medium mr-3">facetoot</h1>
                    <NavInput/>
                </div>

                <div className="dropdownmenu margined2">
                    <AiOutlineCaretDown/>
                </div>

                <div className="margined2 hidden sm:flex  items-center  justify-around">
                    <button className="mr-10">
                        <CurrentUserProfile/>
                    </button>
                    <div className="border-l ">

                        <button
                            onClick={() => signOutfn()}
                            className="hover:bg-gray-200 text-blue-500 trans logooutbtn">
                            <h1>logout</h1>
                            <BiLogIn/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBody
