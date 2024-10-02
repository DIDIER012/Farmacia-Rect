import { useState } from "react";
import NavbarPresentation from "./Navbar";

export const NavbarContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return <NavbarPresentation menuOpen={menuOpen} toggleMenu={toggleMenu} />;
};
