import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Drawer } from "@components/drawer";
import { AdminLayout } from "@components/layout";
import { Table, TableBody, TableHeader, TableRow } from "@components/table";

import AuthService from "@services/auth";
import PropertyService from "@services/property";

// TODO: move these types into their own location

interface IErrorMessage {
  message: string;
}

interface IProperty {
  address: string;
}

interface IAgent {
  name: string;
}

interface IOpenHouse {
  id: number;
  startAt: string;
  endAt: string;
  property: IProperty;
  agent: IAgent;
}

const SpeedDial = () => {
  const menuClassNames = "hidden flex flex-col items-center mb-4 space-y-2";

  return (
    <div data-dial-init className="fixed right-6 bottom-6 group">
      <div id="speed-dial-menu-default" className={menuClassNames}>
        <button
          aria-controls="drawer-create-open-house"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          data-drawer-placement="right"
          data-drawer-show="drawer-create-open-house"
          data-drawer-target="drawer-create-open-house"
          data-tooltip-placement="left"
          data-tooltip-target="tooltip-add"
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          <span className="sr-only">Add</span>
        </button>
        <div
          id="tooltip-add"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 w-auto text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          Add
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        data-dial-trigger="hover"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        className="flex justify-center items-center w-14 h-14 text-white bg-red-700 rounded-full hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none dark:focus:ring-red-800"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

const OpenHouses = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<IErrorMessage | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [openHouses, setOpenHouses] = useState<Array<IOpenHouse | undefined>>([]);

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

    const user = AuthService.getCurrentUser();

    if (user) {
      fetch();
    } else {
      navigate("/login");
    }
  }, []);

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
      <SpeedDial />
      <Drawer
        dataId="drawer-create-open-house"
        title="Create an open house"
        subtitle="Do all the things..."
      />
    </AdminLayout>
  );
};

export default OpenHouses;
