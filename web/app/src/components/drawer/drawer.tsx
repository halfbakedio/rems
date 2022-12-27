import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton } from "@material-tailwind/react";

type Props = {
  title: string,
  onCancel: () => void,
  onSubmit: () => void,
  subtitle?: string,
  visible?: boolean,
};

const style = {
  container: "fixed z-40 right-0 top-0 h-screen p-4 overflow-y-auto bg-white w-[480px] dark:bg-gray-800 shadow-lg",
  title: "flex inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400",
  subtitle: "mb-6 text-sm text-gray-500 dark:text-gray-400",
};

const Drawer = ({ title, subtitle, onCancel, onSubmit, visible }: Props) => {
  return (
    <div
      className={`${visible ? "" : "hidden"} ${style.container}`}
      tabIndex={-1}
    >
      <div className="flex flex-col h-full">
        <div className="grow h-full">
          <div className="flex flex-row justify-between">
            <h5 className={style.title}>
              {title}
            </h5>
            <IconButton
              className="flex-grow"
              variant="text"
              onClick={onCancel}
            >
              <FontAwesomeIcon icon={faClose} size="xl" />
            </IconButton>
          </div>
          { subtitle && (
            <p className={style.subtitle}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outlined" onClick={onCancel}>Cancel</Button>
          <Button variant="gradient" onClick={onSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
