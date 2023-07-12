// import { useEffect, useState } from "react";
import { SignedOut } from "@clerk/nextjs";
import { Text } from "@chakra-ui/react";
// import { useRouter } from "next/router";
// import useSWR from "swr";

import Layout from "/components/layouts/OpenHouse";

const OpenHousePage = () => {
  // const { asPath } = useRouter();
  // const [hash, setHash] = useState(null);
  // const [openHouseId, setOpenHouseId] = useState(null);
  //
  // useEffect(() => {
  //   const path = asPath.split("#")[0];
  //   const pathParts = path.split("/");
  //   setOpenHouseId(pathParts[2]);
  //   setHash(asPath.split("#")[1]);
  // }, [asPath]);
  //
  // const fetcher = async () => {
  //   const res = await fetch(`/api/public/open-houses/${openHouseId}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${hash}`,
  //     },
  //   });
  //
  //   const data = await res.json();
  //
  //   return data;
  // };
  //
  // const { data: openHouse, error } = useSWR("fetcher", fetcher);

  return (
    <>
      <SignedOut>
        <Text fontSize="xl">
          Open House
          {/* Open House {openHouse?.propertyImageId} */}
        </Text>
      </SignedOut>
    </>
  );
};

OpenHousePage.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default OpenHousePage;
