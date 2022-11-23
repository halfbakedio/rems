import { faTents } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarItem,
  NavbarLink,
  NavbarNav,
  NavbarToggler,
} from "@components/navbar";

export const Header = () => {
  return (
    <header className="flex">
      <Navbar className="bg-white text-gray-600">
        <NavbarBrand href="#">
          <FontAwesomeIcon icon={faTents} className="w-8 h-8" />
        </NavbarBrand>
        <NavbarToggler />
        <NavbarCollapse>
          <NavbarNav orientation="start">
            <NavbarItem>
              <NavbarLink href="#">REMS</NavbarLink>
            </NavbarItem>
          </NavbarNav>
          <NavbarNav orientation="end">
            <NavbarItem>
              <NavbarLink href="#">Deployment</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Basic Features</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Advanced Features</NavbarLink>
            </NavbarItem>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export default Header;
