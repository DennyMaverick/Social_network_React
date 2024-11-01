import Picture from '../images/code.jpg';

const BackgroundProfile = () => {
  return (
    <div className='background-profile__wrapper'>
      <img className='content__image' src={Picture} />
    </div>
  );
};

export default BackgroundProfile;
