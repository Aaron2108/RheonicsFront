import "./navBar.css";
import { NAV_LINKS } from "../../constants/navigation";
import { ChevronIcon, SearchIcon } from "../icons/PhoneIcon";

const Navbar = () => (
  <nav className="navbar" aria-label="Main navigation">
    <a href="/" className="navbar__logo" aria-label="Rheonics home">
      <img
        src="https://rheonics.com/wp-content/uploads/2024/08/Rheonics_Logo_blue_singleline-medium-01-scaled.png"
        alt="Rheonics"
        width="250"
        height="60"
        loading="eager"
      />
    </a>

    <ul className="navbar__list" role="list">
      {NAV_LINKS.map(({ label, href, hasDropdown }) => (
        <li key={href} className="navbar__item">
          <a href={href} className="navbar__link">
            {label}
            {hasDropdown && <ChevronIcon size={14} color="#616161" />}
          </a>
        </li>
      ))}
      <SearchIcon size={20} color="#616161" className="navbar__search-icon" />
    </ul>
  </nav>
);

export default Navbar;
