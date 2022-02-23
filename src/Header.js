import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  return (
    <header className={classes.root}>
      <img className={classes.logo} src="clap192.png" alt="Webflix log" />
      <h1 className={classes.title}>Webflix</h1>
      <img className={classes.logo} src="logo192.png" alt="Webflix log" />
      <nav className={classes.nav}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/favorites">
          {`Favorites (${favorites.length})`}
        </Link>
        <Link className={classes.link} to="/about">
          About
        </Link>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  favorites: [],
};

export default Header;