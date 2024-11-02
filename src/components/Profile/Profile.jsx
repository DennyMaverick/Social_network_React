import style from './Profile.module.css';
import BackgroundProfile from '../BackgroundProfile/BackgroundProfile';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <BackgroundProfile />
      <MyPosts />
    </div>
  );
};

export default Profile;
