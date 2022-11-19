import {
  Navbar,
  NavbarNav,
  NavbarItem,
  NavbarLink,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
} from "@components/navbar";

export const Header = () => {
  return (
    <Navbar className="bg-white text-gray-600">
      <NavbarBrand href="#">
        <img
          src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          alt="Next.js"
          className="w-9 h-9"
        />
      </NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNav orientation="start">
          <NavbarItem>
            <NavbarLink href="#">Documentation</NavbarLink>
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
  );
};

export default Header;
