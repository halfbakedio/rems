import { useQuery } from "@apollo/client";
import { faTents } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Avatar } from "@components/avatar";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarItem,
  NavbarLink,
  NavbarNav,
  NavbarToggler,
} from "@components/navbar";

// eslint-disable-next-line import/no-unresolved
import GetProfile from "@/common/graphql/queries/get-profile.graphql";

export const Header = () => {
  const { loading, error, data } = useQuery(GetProfile);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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
            {data.me &&
              <NavbarItem>
                <Avatar name={data.me.email} size="sm" />
              </NavbarItem>
            }
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export default Header;
