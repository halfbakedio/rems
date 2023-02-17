import { Box, chakra, Icon, SimpleGrid } from "@chakra-ui/react";
import { ResponsiveFunnel } from "@nivo/funnel";
import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";

import { StatsCard } from "@components/card";
import { Layout } from "@components/layout";

import { data } from "../common/mock/contact-funnel-data.js";

const AccountStatistics = () => {
  return (
    <Box maxW="8xl" mx={"auto"} pt={4} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"left"}
        fontSize={"3xl"}
        py={4}
      >
        Monthly account information
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

// type Datum = {
//   id: string,
//   value: number,
//   label: string,
// };
//
// type IntakeFunnelProps = {
//   data: Array<Datum>,
// };

const IntakeFunnel = () => {
  return (
    <Box maxW="8xl" h={"400px"} mx={"auto"} pt={4} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"left"}
        fontSize={"3xl"}
        py={4}
      >
        Contact intake funnel
      </chakra.h1>
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: "spectral" }}
        borderWidth={20}
        labelColor={{
          from: "color",
          modifiers: [
            [
              "darker",
              3,
            ],
          ],
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
      />
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Layout data-id="dashboard-layout">
      <AccountStatistics />
      <IntakeFunnel />
    </Layout>
  );
};

export default Dashboard;
