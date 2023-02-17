import { Box, chakra, Icon, SimpleGrid } from "@chakra-ui/react";
import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";

import { StatsCard } from "@components/card";
import { Layout } from "@components/layout";

const AccountStatistics = () => {
  return (
    <Box maxW="8xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"left"}
        fontSize={"3xl"}
        py={8}
        fontWeight={"bold"}
      >
        Monthly account information.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"New contacts"}
          stat={"1,234"}
          icon={<Icon boxSize="3em" as={BiUser} />}
        />
        <StatsCard
          title={"Revenue"}
          stat={"$1,000,000"}
          icon={<Icon boxSize="3em" as={BiMoney} />}
        />
        <StatsCard
          title={"Active projects"}
          stat={"7"}
          icon={<Icon boxSize="3em" as={BiBuildingHouse} />}
        />
      </SimpleGrid>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Layout data-id="dashboard-layout">
      <AccountStatistics />
    </Layout>
  );
};

export default Dashboard;
