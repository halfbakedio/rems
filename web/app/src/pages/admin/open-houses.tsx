import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import { SpeedDial } from "@components/button";
import { Drawer } from "@components/drawer";
import { AdminLayout } from "@components/layout";
import { Table, TableBody, TableHeader, TableRow } from "@components/table";

import PropertyService from "@services/property";

import { ErrorMessage, OpenHouse } from "~types/index";

const OpenHouses = () => {
  const [errorMessage, setErrorMessage] = useState<ErrorMessage | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [openHouses, setOpenHouses] = useState<Array<OpenHouse | undefined>>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await PropertyService.getOpenHouses();
        setOpenHouses(result.data);
        setErrorMessage(undefined);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage({ message: "derped out" });
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  const handleClickAdd = () => setDrawerOpen(true);
  const handleDrawerCancel = () => setDrawerOpen(false);

  return (
    <AdminLayout>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg m-8">
        <Table>
          <TableHeader columns={["ID", "Start at", "End at"]} />
          <TableBody>
            {openHouses.map((openHouse) => (
              openHouse && <TableRow key={nanoid()} values={[openHouse.id, openHouse.startAt, openHouse.endAt]} />
            ))}
          </TableBody>
        </Table>
        {/* TODO: add pagination */}
      </div>
      <SpeedDial dataId="open-houses-menu">
        <SpeedDial.AddButton
          dataId="open-houses-menu-add"
          onClick={handleClickAdd}
        />
      </SpeedDial>
      <Drawer
        title="Create an open house"
        subtitle="Do all the things..."
        onCancel={handleDrawerCancel}
        onSubmit={() => {}} // eslint-disable-line @typescript-eslint/no-empty-function
        visible={drawerOpen}
      />
    </AdminLayout>
  );
};

export default OpenHouses;
