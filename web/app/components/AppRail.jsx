import Link from "next/link";
import { CgBoard, CgChart, CgOptions, CgOrganisation } from "react-icons/cg";
import { Box, Center, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Logo from "./Logo";

const AppRailButton = ({ label, icon, path }) => (
  <Link href={path}>
    <IconButton
      border={0}
      borderRadius={0}
      h="64px"
      w="100%"
      variant="ghost"
      aria-label={label}
      icon={icon}
      fontSize="24px"
      _hover={{
        bg: "blue.700",
        borderLeft: "2px",
      }}
    />
  </Link>
);

const AppRail = () => (
  <Box
    id="app-rail"
    bg="blue.800"
    color="gray.100"
    // boxShadow="0 0 2px 2px rgba(0, 0, 0, 0.2)"
    w="64px"
    left={0}
    top={0}
    minH="100vh"
    position="fixed"
    zIndex={3}
  >
    <Flex direction="column" minH="100vh">
      <Link href="/">
        <Center h="64px" w="64px">
          <Logo id="app-rail-logo" color="gray.100" h="32px" w="32px" />
        </Center>
      </Link>
      <SignedOut>
        <Spacer />
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <AppRailButton label="Dashboard" icon={<CgBoard />} path="/" />
        <AppRailButton label="Properties" icon={<CgOrganisation />} path="/properties" />
        <AppRailButton label="Reports" icon={<CgChart />} path="/reports" />
        <Spacer />
        <AppRailButton label="Settings" icon={<CgOptions />} path="/settings" />
        <Center h="64px" w="64px">
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/user"
            afterSignOutUrl="/"
            afterSignOutAll="/"
            afterSignOutOneUrl="/"
          />
        </Center>
      </SignedIn>
    </Flex>
  </Box>
);

export default AppRail;
