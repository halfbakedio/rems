import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton } from "@material-tailwind/react";

type Props = {
  dataId: string,
  title: string,
  subtitle?: string,
};

const style = {
  container: "fixed z-40 h-screen p-4 overflow-y-auto bg-white w-[480px] dark:bg-gray-800 shadow-lg",
  title: "flex inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400",
  subtitle: "mb-6 text-sm text-gray-500 dark:text-gray-400",
};

const Drawer = ({ dataId, title, subtitle }: Props) => {
  return (
    <div
      id={dataId}
      className={style.container}
      tabIndex={-1}
      aria-labelledby={`${dataId}-label`}
    >
      <div className="flex flex-col h-full">
        <div className="grow h-full">
          <div className="flex flex-row justify-between">
            <h5
              id={`${dataId}-label`}
              className={style.title}
            >
              {title}
            </h5>
            <IconButton
              className="flex-grow"
              variant="text"
              data-drawer-dismiss={dataId}
              aria-controls={dataId}
            >
              <FontAwesomeIcon icon={faClose} />
            </IconButton>
          </div>
          { subtitle && (
            <p className={style.subtitle}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outlined">Cancel</Button>
          <Button variant="gradient">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
