import {
  faAddressBook,
  faHouseLaptop,
  faSliders,
  faTableColumns,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Sidenav, SidenavItem } from "@components/sidenav";


const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // <button
  //   type="button"
  //   aria-disabled={open}
  //   disabled={open}
  //   onClick={toggle}
  //   className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-gray-800"
  // >
  //   Click to open me
  // </button>

  return (
    <>
      <Sidenav open={open} toggle={toggle}>
        <div className="flex flex-col">
          <div className="flex-auto">
            <SidenavItem href="#">
              <FontAwesomeIcon icon={faTableColumns} className="h-5" />
              <span className="pl-2 text-sm">Dashboard</span>
            </SidenavItem>
            <SidenavItem href="#">
              <FontAwesomeIcon icon={faHouseLaptop}  className="h-5" />
              <span className="pl-2 text-sm">Projects</span>
            </SidenavItem>
            <SidenavItem href="#">
              <FontAwesomeIcon icon={faTasks}  className="h-5" />
              <span className="pl-2 text-sm">Tasks</span>
            </SidenavItem>
            <SidenavItem href="#">
              <FontAwesomeIcon icon={faAddressBook}  className="h-5" />
              <span className="pl-2 text-sm">Contacts</span>
            </SidenavItem>
          </div>
          <SidenavItem href="#">
            <FontAwesomeIcon icon={faSliders}  className="h-5" />
            <span className="pl-2 text-sm">Settings</span>
          </SidenavItem>
        </div>
      </Sidenav>
    </>
  );
};

export default Sidebar;
