import img from '../Images/MF1esV.jpg'
import {useEffect ,useState} from 'react'
import EditProfile from '../Components/EditProfile/EditProfile'
import FetchUsers from '../Hooks/FetchUsers'
import Spinner from '../Components/Spinner/Spinner'
import GetProfileInfo from '../Components/Profile/GetProfileInfo'
import Post from '../Components/Posts/Post'
const ProfilePage = () => {
    const [Open ,SetOpen] = useState(false)
    const {SelectedUser ,user ,id ,SelectedUserPosts} = GetProfileInfo()
    
   

    return (SelectedUser && SelectedUserPosts ? <div>
{ Open && <div
    onClick={()=>SetOpen(false)}
     className="BlurBG"></div>}

     <section
        style={{backgroundColor:'transparent'}}
        className='sm:w-11/12 md:w-11/12   2xl:w-10/12  ProfilePageSection'>
        <div
            className="sm:w-11/12 lg:w-9/12 ProfliePageDiv  ">
            <div className=" sm:h-64 lg:h-72 h-60 sm:mx-auto sm:w-full">
                <img src={img} alt="" className="w-full h-full rounded-lg"/>
            </div>
            <div
                className="userP ProfliePageDiv2 ">
                <div
                    className='userIMG sm:w-36 sm:h-36 w-28 h-28 rounded-full border-4 border-white bg-white'>
                    <img src={SelectedUser.photoURL} alt="" className='w-full h-full rounded-full object-cover'/>
                </div>
                <div className='pl-3 sm:pt-7 '>
                    <h1 className=" font-semibold text-xl ">{`${SelectedUser.displayName}`}</h1>
                    <h1 className="text-gray-500 ">Created at: {`${user.createdAt}`}</h1>
                </div>
            </div>
         {id === user.uid &&   <button
            onClick={()=>SetOpen(true)}
                className="cursor-pointer w-2/4  EditProfileBTN  EditProfileBTN2 ">edit profile
                </button>}
          <EditProfile Open={Open} SetOpen={SetOpen} user={SelectedUser}/> 
        </div>

        <section className='w-full flex flex-col sm:w-11/12 lg:w-9/12 mt-8'>
            <div>
                <h1 className="text-xl font-medium my-3  ml-2 pb-3">
                    {`${SelectedUser.displayName}'s `}Posts
                </h1>
            </div> 
            <div>
                {SelectedUserPosts.map(post=>
                  
                  {   return   <Post
                    displayName={SelectedUser.displayName}
                    photoURL={SelectedUser.photoURL}
                    postDetails={post.PostDetails}
                    likes={post.likes}
                    time={post.time}
                    postImage={post.postImage}
                    PostUniqueId={post.PostUniqueId}
                    PostUserId={post.PostUserId}

                    />}
                )}
            </div>
        </section> 
    </section>
             </div> : <Spinner />
    )
}

export default ProfilePage