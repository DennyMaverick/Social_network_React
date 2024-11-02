import style from './Post.module.css';

const Post = props => {
  return (
    <div className={style.item}>
      <img className={style['post-img']} src={props.avatar} />
      {props.message}
    </div>
  );
};

export default Post;
