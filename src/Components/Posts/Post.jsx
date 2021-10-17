import {AiOutlineLike} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'

const Post = ({displayName, photoURL, postDetails, likes}) => {
    return (
        <article className="post p-3 my-5 bg-white shadow-sm rounded-md">

            <div className='flex  items-center'>
                <div className="w-9 h-9 mr-2 rounded-full ">
                    <img src={photoURL} className='w-full h-full object-contain rounded-full' alt=""/>
                </div>
                <div className='px-1'>
                    <h1 className='font-medium'>{displayName}</h1>
                    <h1 className='text-sm text-gray-500'>5 mins ago</h1>
                </div>
            </div>
            <div className='py-6 '>
                <h1>{postDetails}</h1>
            </div>
            <div className="py-2 flex text-center items-center text-gray-600">
                <AiOutlineLike className='btnicon'/>

                <h1>{likes}</h1>
            </div>
            <div className="w-full mt-2 border-t text-gray-600 flex  ">

                <button
                    type='submit'
                    className='flex2 btnst border-r w-2/4  hover:text-blue-500'>
                    <AiOutlineLike className='btnicon'/>
                    Like
                </button>

                <button type='button' className='flex2 w-2/4 btnst  hover:text-blue-500'>
                    <BiComment className='btnicon mt-1'/>
                    Comment</button>
            </div>

        </article>
    )
}

export default Post
