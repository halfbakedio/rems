import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";

import { useApplication } from "@/lib/store/hooks";

const capitalize = (str) => str && str.charAt(0).toUpperCase() + str.slice(1);

// TODO:
//  - add global context menu
//  - read current context from state and display context menu
const AppHeader = () => {
  const [title, setTitle] = useState("");

  const { context } = useApplication();

  useEffect(() => {
    setTitle(capitalize(context));
  }, [context]);

  return (
    <Center h="64px" color="gray.600">
      <Flex w="100%" px={3}>
        <Center>
          <Heading size="sm" mx={3}>{title}</Heading>
        </Center>
        <Spacer />
        <SignedOut>
          <Link href="/sign-in">Sign in</Link>
        </SignedOut>
        <SignedIn>
          <Button
            aria-label="Action"
            variant="outline"
            borderWidth="1px"
            borderLeftRadius="lg"
            borderRightRadius={0}
            borderRightWidth={0}
            // boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
            px={2}
            w={24}
          >
            Action
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Actions"
              icon={<FiChevronDown />}
              variant="outline"
              borderLeftRadius={0}
              // boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
            />
            <MenuList>
              <MenuGroup title="Global">
                <MenuItem>Global Action 1</MenuItem>
                <MenuItem>Global Action 2</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="From Context">
                <MenuItem>Add New</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </SignedIn>
      </Flex>
    </Center>
  );
};

export default AppHeader;
