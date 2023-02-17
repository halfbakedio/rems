import { useQuery } from "@apollo/client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { BiLogOut, BiNotification, BiSliderAlt, BiUser } from "react-icons/bi";
// import { faTents } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Avatar } from "@components/avatar";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarCollapse,
//   NavbarItem,
//   NavbarLink,
//   NavbarNav,
//   NavbarToggler,
// } from "@components/navbar";

// eslint-disable-next-line import/no-unresolved
import GetProfile from "@/common/graphql/queries/get-profile.graphql";

type Props = {
  name: string;
};
 
const ProfileMenu = ({ name }: Props) => {
  return (
    <Menu>
      <MenuButton>
        <Avatar name={name} size="sm" />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Icon boxSize="1.25em" as={BiSliderAlt} />}>Profile</MenuItem>
        <MenuItem icon={<Icon boxSize="1.25em" as={BiUser} />}>Settings</MenuItem>
        <MenuDivider />
        <MenuItem icon={<Icon boxSize="1.25em" as={BiLogOut} />}>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const Header = () => {
  const { loading, error, data } = useQuery(GetProfile);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Flex h="64px" px="12px" minWidth="max-content" alignItems="center" gap="2">
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </Box>
      <Spacer />
      <Box>
        <IconButton
          aria-label="notifications"
          size="lg"
          variant="outline"
          style={{ border: 0 }}
          icon={<Icon boxSize="1.25em" as={BiNotification} />}
        />
      </Box>
      <Box>
        {data.me && <ProfileMenu name={data.me.email} />}
      </Box>
    </Flex>
  );
};

export default Header;
