
import UserProfile from './UserProfile';
import EditProfileButton from './EditProfileButton';

const EditProfile = ({Open, SetOpen, user}) => {

    return (Open && 
    <div className="sm:w-3/4 xl:w-2/4 right-2/4 translated ProfileDiv">
        <EditProfileButton SetOpen={SetOpen}/>
        <UserProfile user={user}/>
    </div>)
}

export default EditProfile
