import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'
import LikePost from './LikePost'
import PostUserProfile from './PostUserProfile';
import {useSelector} from 'react-redux'
import {useRef} from 'react'
import {Link} from 'react-router-dom'
const Post = ({
    displayName,
    photoURL,
    postDetails,
    likes,
    time,
    postImage,
    PostUniqueId,
    PostUserId
    // Setlike, liked
}) => {
    const ref = useRef(null)
    const user = useSelector(state => state.userInfo.currentUserInfo)

    const {updateLikes} = LikePost()
    const Managelikes = async() => {
        await updateLikes(PostUniqueId, likes, user.uid)
    }

    return (
        <article
            ref={ref}
            id={PostUniqueId}
            className="post pt-3 px-3 my-5 bg-white shadow-sm rounded-md">
            <Link to={`/profile/${PostUserId}`}>
                <PostUserProfile time={time} displayName={displayName} photoURL={photoURL}/>
            </Link>
            <div className='py-6 '>
                <h1>{postDetails}</h1>
            </div>

            {postImage && <div className='flex items-center justify-center postimage  '>
                <img className='w-full h-full object-contain' src={postImage} alt=""/>
            </div>}

            <div className="py-2 flex text-center items-center text-gray-600">
                <AiOutlineLike className='btnicon'/>
                <h1>{likes.length}</h1>
            </div>
            <div className="w-full mt-2 border-t text-gray-600 flex  ">

                <button
                    onClick={(e) => {
                    Managelikes()
                }}
                    type='submit'
                    className={`flex2 btnst w-2/4 hover:text-blue-500`}>

                    <AiOutlineLike className='btnicon'/>

                    like
                </button>

                <button type='button' className='flex2 w-2/4 btnst  hover:text-blue-500'>
                    <BiComment className='btnicon mt-1'/>
                    Comment</button>
            </div>

        </article>
    )
}

export default Post
