import {signOut} from 'firebase/auth'
import {auth} from '../Auth/initialize'
import NavBody from '../Components/Navbar/NavBody'
import CAPform from '../Components/CreateApost/CAPform'
import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react'
import datetimeDifference from "datetime-difference";
import PostsSection from '../Components/Posts/PostsSection'

const FeedPage = () => {
    const user = useSelector(state => state.userInfo.currentUserInfo)

    const signOutfn = async() => {
        await signOut(auth)
    }

    useEffect(() => {
        document.body.className = "bg-gray-200"
    }, []);

    return (
        <div className="bg-gray-200">
            <NavBody signOutfn={signOutfn}/>
            <section className="h-full bg-gray-200 ">
                <div className=" feedsection feedst">
                    <article className="sm:w-11/12 lg:w-9/12 capformst ">
                        <CAPform/>
                    </article>
                    <PostsSection/>
                </div>
            </section>
        </div>
    )
}

export default FeedPage
