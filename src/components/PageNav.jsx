import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

const navLinks = [
  { path: "/pricing", label: "Pricing" },
  { path: "/product", label: "Product" },
  { path: "/login", label: "Login" },
];

export const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <NavItems />
      </ul>
    </nav>
  );
};

function NavItems() {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={link.path === "/login" ? styles.ctaLink : ""}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default PageNav;
