import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style['header__logo-picture']}
        src='https://img.freepik.com/premium-vector/aa-letter-monogram-bold-company-name-logo_609138-89.jpg'
        alt='logo'
      />
    </header>
  );
};

export default Header;
