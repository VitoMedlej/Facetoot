import {actionSuccess} from '../../Redux/UsersSlice'
import {useEffect ,useState} from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import FetchUsers from '../../Hooks/FetchUsers'
import FetchPosts from '../../Hooks/FetchPosts'

const GetProfileInfo = () => {
    const {Users} = FetchUsers()
    const {Posts} = FetchPosts()
    useEffect(() => {
        document.body.className = 'bg-white'
    })
    const dispatch = useDispatch()
    
    const user = useSelector(state => state.userInfo.currentUserInfo)
    
    let { id } = useParams();

    useEffect(() => {
        dispatch(actionSuccess({Users}))
    }, [Users])

    const allusers = useSelector(state => state.Allusers.UsersArray)
    const SelectedUser = allusers.find(user => user.uid === id)
    const SelectedUserPosts = Posts.filter(post =>post.PostUserId === id)
    return {user ,SelectedUser ,id ,SelectedUserPosts}
}

export default GetProfileInfo
