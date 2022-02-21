import { Link } from "react-router-dom";

import useStyles from "./Header.style";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img className={classes.logo} src="clap192.png" alt="Webflix log" />
      <h1 className={classes.title}>Webflix</h1>
      <img className={classes.logo} src="logo192.png" alt="Webflix log" />
      <nav className={classes.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;