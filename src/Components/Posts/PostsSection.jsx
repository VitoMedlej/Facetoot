import Spinner from '../Spinner/Spinner'
import FetchPosts from '../../Hooks/FetchPosts'
import FetchUsers from '../../Hooks/FetchUsers'
import Post from '../Posts/Post'
import GetDate from '../../Hooks/GetDate'
import compareDates from './CompareDates'
import {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'

const PostsSection = () => {

    useEffect(() => {
        document.body.className = 'bg-gray-200'
    }, [])
    const allusers = useSelector(state => state.Allusers.UsersArray)

    const {Posts, loading} = FetchPosts()
    const [liked,
        Setlike] = useState(true)
    const {Users} = FetchUsers()
    const now = new Date()

    const NoPosts = loading && Posts.length === 0
        ? <h1>Sorry, there were no posts found!</h1>
        : ''

    const SortedPosts = Posts.sort((a, b) => parseInt(b.PostedAtDate) - parseInt(a.PostedAtDate));

 

    return (
        <section className="mt-8 sm:w-11/12 lg:w-9/12 capformst ">
            {NoPosts}
            {// check if loading is done ,loading has to be true
            loading
            // Loop over the users ,makes sure they are the only ones who can post and use
            // their profile pictures dynamically
                ? Users.map(user => {
                    return SortedPosts.map((post) => {
                        return (user.uid === post.PostUserId && <Post
                            liked={liked}
                            PostUserId={post.PostUserId}
                            Setlike={Setlike}
                            PostUserId={post.PostUserId}
                            PostUniqueId={post.PostUniqueId}
                            key={`${GetDate()}${now.getMilliseconds()}${post.PostDate}`}
                            postDetails={post.PostDetails}
                            time={compareDates(post.PostDate)}
                            likes={post.likes}
                            postImage={post.postImage}
                            photoURL={user.photoURL}
                            displayName={user.displayName}/>)
                    })
                })
                : <Spinner/>}

        </section>
    )
}

export default PostsSection
