
const PostUserProfile = ({photoURL ,displayName ,time}) => {
    return (
        <div className='flex  items-center'>
        <div className="w-9 h-9 mr-2 rounded-full ">
            <img src={photoURL} className='w-full h-full object-cover rounded-full' alt=""/>
        </div>
        <div className='px-1'>
            <h1 className='font-medium'>{displayName}</h1>
            <h1 className='text-sm text-gray-500'>{time
                    ? `${time} ago`
                    : 'just now'}</h1>
        </div>
    </div>
    )
}

export default PostUserProfile
