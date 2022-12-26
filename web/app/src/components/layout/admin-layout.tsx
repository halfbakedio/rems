import {
  Button,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MenuButton } from "@components/button";
import { useAuth } from "~hooks/useAuth";

type Props = {
  children?: React.ReactNode,
};

const AdminLayout = ({ children }: Props) => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLink = (label: string, path: string) => (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <Link to={path} className="flex items-center">
        {label}
      </Link>
    </Typography>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLink("Accounts", "/admin/accounts")}
      {navLink("Users", "/admin/users")}
      {navLink("Properties", "/admin/properties")}
      {navLink("Listings", "/admin/listings")}
      {navLink("Open Houses", "/admin/open-houses")}
    </ul>
  );

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <Navbar className="py-2 px-4 lg:px-8 lg:py-4" fullWidth>
        <div className="w-full flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>REMS Admin</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button variant="gradient" size="sm" className="hidden lg:inline-block" onClick={handleLogout}>
            <span>Log out</span>
          </Button>
          <MenuButton isOpen={openNav} handleToggle={() => setOpenNav(!openNav)} />
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2" onClick={handleLogout}>
            <span>Log out</span>
          </Button>
        </MobileNav>
      </Navbar>
      {children}
    </div>
  );
};

export default AdminLayout;
