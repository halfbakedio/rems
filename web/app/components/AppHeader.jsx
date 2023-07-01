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
import { nanoid } from "nanoid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { useApplication } from "@/lib/store/hooks";

const capitalize = (str) => str && str.charAt(0).toUpperCase() + str.slice(1);

const AppHeader = () => {
  const [title, setTitle] = useState("");

  const { context, contextActions } = useApplication();

  useEffect(() => {
    setTitle(capitalize(context));
  }, [context]);

  return (
    <Center
      h="64px"
      w="full"
      color="gray.600"
      borderBottom="1px"
      borderColor="gray.100"
      boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
      bg="rgba(255, 255, 255, 0.9)"
    >
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
            borderColor="blue.800"
            bg="blue.200"
            boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
            px={2}
            w={24}
            _hover={{
              color: "gray.50",
              bg: "blue.700",
            }}
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
              borderColor="blue.800"
              bg="blue.200"
              boxShadow="0 1px 5px rgba(0, 0, 0, 0.1)"
              _hover={{
                color: "gray.50",
                bg: "blue.700",
              }}
            />
            <MenuList>
              <MenuGroup title="Global">
                <MenuItem>Global Action 1</MenuItem>
                <MenuItem>Global Action 2</MenuItem>
              </MenuGroup>
              { contextActions && contextActions.length > 0 && (
                <>
                  <MenuDivider />
                  <MenuGroup title="From Context">
                    {contextActions.map((action) => (
                      <MenuItem key={nanoid()} onClick={action.onClick}>
                        {action.label}
                      </MenuItem>
                    ))}
                  </MenuGroup>
                </>
              )}
            </MenuList>
          </Menu>
        </SignedIn>
      </Flex>
    </Center>
  );
};

export default AppHeader;
