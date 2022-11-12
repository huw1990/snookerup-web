import classes from './Header.module.css';

import logoImage from '../../assets/snookerup_logo.png';

const Header = (props) => {
  return (
    <header className={classes.header}>
        <div className={classes.header__sidecontainer}>
            <a href="index.html" className={classes.header__logo}>
                <img src={logoImage} alt='SnookerUp'/>
                <h1 className={classes.header__title}>SnookerUp</h1>
            </a>
        </div>
        <div className={classes.header__sidecontainer}>
            <button className={classes.header__button}>Login</button>
            <button className={`${classes['header__button--cta']} ${classes.header__button}`}>Sign Up</button>
        </div>
    </header>
  );
};

export default Header;