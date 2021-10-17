import Spinner from '../Spinner/Spinner'
import FetchPosts from '../../Hooks/FetchPosts'
import FetchUsers from '../../Hooks/FetchUsers'
import Post from '../Posts/Post'
import GetDate from '../../Hooks/GetDate'

const PostsSection = () => {

    const {Posts, loading} = FetchPosts()
    const {Users} = FetchUsers()
    const date = new Date()

 
    return (
        <section className="mt-8 sm:w-11/12 lg:w-9/12 capformst ">
            {loading && Posts.length == 0 ? <h1>Sorry, there were no posts found!</h1> : ''}
            {
             loading
                ? Users.map(a => {
                    const SortedPosts = Posts.sort((a, b) => parseFloat(a.PostedAtDate) > parseFloat(b.PostedAtDate));
                    return SortedPosts.map(e => (a.uid === e.PostUid && <Post
                        key={`${GetDate()}${date.getMilliseconds()}${e.PostDate}`}
                        postDetails={e.PostDetails}
                        likes={e.likes}
                        photoURL={a.photoURL}
                        displayName={a.displayName}/>))
                })
                : <Spinner/> }

        </section>
    )
}

export default PostsSection
