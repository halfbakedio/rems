import { Box, chakra, Flex, Icon, SimpleGrid } from "@chakra-ui/react";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { ResponsiveFunnel } from "@nivo/funnel";
import { BiBuildingHouse, BiMoney, BiUser } from "react-icons/bi";

import { data } from "@/common/mocks/contact-funnel-data.js";
import { data as calendarData } from "@/common/mocks/open-house-calendar-data.js";

import { StatsCard } from "@components/card";
import { Layout } from "@components/layout";

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
    <Box maxW="4xl" minW="2xl" h={"600px"} pt={4} px={{ base: 2, sm: 12, md: 17 }}>
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

const OpenHouseContacts = () => (
  <Box maxW="4xl" minW="2xl" h={"600px"} pt={4} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"left"}
        fontSize={"3xl"}
        py={4}
      >
        Open house contacts generated
      </chakra.h1>
    <ResponsiveTimeRange
      data={calendarData}
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  </Box>
);

const Dashboard = () => {
  return (
    <Layout data-id="dashboard-layout">
      <AccountStatistics />
      <Flex direction={"row"} mx={"auto"} justifyContent="center">
        <IntakeFunnel />
        <OpenHouseContacts />
      </Flex>
    </Layout>
  );
};

export default Dashboard;
