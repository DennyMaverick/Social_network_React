import style from './BackgroundProfile.module.css';

import Picture from '../../images/code.jpg';

const BackgroundProfile = () => {
  return (
    <div className={style.backgroundProfile__wrapper}>
      <img className='content__image' src={Picture} />
    </div>
  );
};

export default BackgroundProfile;
