import BackgroundProfile from './BackgroundProfile';

const Profile = () => {
  return (
    <div>
      <div className='content'>
        <BackgroundProfile />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
