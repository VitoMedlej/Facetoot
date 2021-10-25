import CurrentUserProfile from './CurrentUserProfile';
import NavInput from './NavInput';
import {AiOutlineCaretDown} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'
import {useSelector} from 'react-redux';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {useState} from 'react';
import {Link} from 'react-router-dom'

const NavBody = ({signOutfn ,open ,SetOpen}) => {
    const User = useSelector(state => state.userInfo.currentUserInfo)
    
    return (
        <nav className=" h-14 w-full  shadow-md bg-white relative">
            <div className="flexed  h-full justify-between mx-auto">
                <div className="logo margined blue font-medium flexed">
                    <h1 className="blue text-lg font-medium mr-3">
                        <Link to="/">facetoot</Link>
                    </h1>
                    <NavInput/>
                </div>
                <div
                    onClick={() => SetOpen(!open)}
                    className={`dropdownmenu margined2 transed ${open
                    ? 'rotated'
                    : ''}`}>
                    <AiOutlineCaretDown className='pointer-events-none'/>
                </div>

                {open
                    ? <DropDownMenu signOutfn={signOutfn} user={User}/>
                    : ''}

                <div className="margined2 hidden sm:flex  items-center  justify-around">

                    <button className="mr-10">
                        <Link to={`/profile/${User.uid}`}>
                            <CurrentUserProfile/>
                        </Link>
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
