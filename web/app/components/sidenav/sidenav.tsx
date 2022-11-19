type SidenavProps = {
  children?: React.ReactNode;
  open: boolean;
  toggle: () => void;
};

type SidenavItemProps = {
  children?: React.ReactNode;
  href: string;
};

const style = {
  item: `flex justify-start cursor-pointer font-medium hover:text-gray-400 ml-8 mb-10`,
  closeIcon: `absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer`,
  sidenav: {
    open: `w-96 md:w-60 bg-gray-100 text-gray-800 overflow-x-hidden`,
    close: `w-0 bg-gray-100 text-gray-800 overflow-x-hidden`,
    default: `h-screen fixed z-0 top-16 left-0 transition-all ease duration-200 border-r shadow-md`,
  },
};

const Sidenav = ({ open, toggle, children }: SidenavProps) => {
  return (
    <aside
      className={`${style.sidenav.default} 
        ${open ? style.sidenav.open : style.sidenav.close}`}
    >
      <button aria-label="Close" className={style.closeIcon} onClick={toggle}>
        &times;
      </button>
      <div className="mt-12">{children}</div>
    </aside>
  );
};

const SidenavItem = ({ children, href }: SidenavItemProps) => {
  return (
    <a href={href} className={style.item}>
      {children}
    </a>
  );
};

export { Sidenav, SidenavItem };
