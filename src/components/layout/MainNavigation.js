import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritesContext = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>
                {favouritesContext.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
