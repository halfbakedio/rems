import { useQuery } from "@apollo/client";
import { faTents } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarItem,
  NavbarLink,
  NavbarNav,
  NavbarToggler,
} from "@components/navbar";

import getProfile from "@/common/graphql/queries/get-profile.graphql";

// const GET_PROFILE = gql`
//   query GetProfile {
//     me {
//       email
//       image
//     }
//   }
// `;

export const Header = () => {
  const { loading, error, data } = useQuery(getProfile);
  // const { loading, error, data } = useQuery(GET_PROFILE);

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
                <NavbarLink href="#">{data.me.email}</NavbarLink>
              </NavbarItem>
            }
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
};

export default Header;
