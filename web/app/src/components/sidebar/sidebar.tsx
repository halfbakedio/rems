import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiBuildingHouse, BiColumns, BiFace, BiTask } from "react-icons/bi";

import { Sidenav, SidenavItem } from "@components/sidenav";


const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Sidenav open={open} toggle={toggle}>
      <Flex direction="column">
        <Box flex="auto">
          <SidenavItem href="/">
            <Icon boxSize="1.5em" as={BiColumns} />
            <Text fontSize="sm" pl="8px">Dashboard</Text>
          </SidenavItem>
          <SidenavItem href="/contacts">
            <Icon boxSize="1.5em" as={BiFace} />
            <Text fontSize="sm" pl="8px">Contacts</Text>
          </SidenavItem>
          <SidenavItem href="/projects">
            <Icon boxSize="1.5em" as={BiBuildingHouse} />
            <Text fontSize="sm" pl="8px">Projects</Text>
          </SidenavItem>
          <SidenavItem href="/tasks">
            <Icon boxSize="1.5em" as={BiTask} />
            <Text fontSize="sm" pl="8px">Tasks</Text>
          </SidenavItem>
        </Box>
      </Flex>
    </Sidenav>
  );
};

export default Sidebar;
