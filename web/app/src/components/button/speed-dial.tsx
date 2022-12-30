import { faFileCirclePlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";

type Props = {
  dataId: string;
  children?: React.ReactNode;
}

type ButtonProps = {
  dataId: string;
  onClick: () => void;
};

const AddButton = ({ dataId, onClick }: ButtonProps) => {
  const style = {
    target: `inline-block absolute invisible z-10 py-2 px-3 w-auto
      text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0
      transition-opacity duration-300 tooltip dark:bg-gray-700`,
    button: `flex justify-center items-center w-[52px] h-[52px]
      text-gray-500 hover:text-gray-900 bg-white rounded-full border
      border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm
      dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700
      dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none
      dark:focus:ring-gray-400`,
  };

  return (
    <>
      <Button
        className={style.button}
        aria-controls={dataId}
        data-tooltip-placement="left"
        data-tooltip-target="tooltip-add"
        variant="filled"
        ripple
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faFileCirclePlus} size="lg" />
        <span className="sr-only">Add</span>
      </Button>
      <div
        id="tooltip-add"
        role="tooltip"
        className={style.target}
      >
        Add
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

const SpeedDial = ({ children, dataId }: Props) => {
  const style = {
    target: "hidden flex flex-col items-center mb-4 space-y-2",
    button: `flex justify-center items-center w-14 h-14
      text-white bg-red-700 rounded-full hover:bg-red-800 dark:bg-red-600
      dark:hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none
      dark:focus:ring-red-800`,
  };

  return (
    <div data-dial-init className="fixed right-6 bottom-6 group">
      <div id={dataId} className={style.target}>
        {children}
      </div>
      <Button
        className={style.button}
        data-dial-toggle={dataId}
        data-dial-trigger="hover"
        aria-controls={dataId}
        aria-expanded="false"
        variant="filled"
        ripple
      >
        <FontAwesomeIcon
          aria-hidden="true"
          className="w-6 h-6 transition-transform group-hover:rotate-45"
          icon={faPlus}
        />
        <span className="sr-only">Open menu</span>
      </Button>
    </div>
  );
};

SpeedDial.AddButton = AddButton;

export default SpeedDial;
