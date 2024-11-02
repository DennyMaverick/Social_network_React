import style from './MyPosts.module.css';
import Post from './Post/Post';
import avatar_1 from '../../../images/avatar-1.jpg';
import avatar_2 from '../../../images/avatar-new-2.png';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>New post</div>
      <div className={style.posts}>
        <Post avatar={avatar_1} message='Hello!' />
        <Post avatar={avatar_2} message='I am Denis' />
      </div>
    </div>
  );
};

export default MyPosts;
