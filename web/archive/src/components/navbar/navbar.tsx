import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type NavbarProps = {
  children?: React.ReactNode;
  className: string;
};

type NavbarBrandProps = {
  children?: React.ReactNode;
  href: string;
};

type NavbarCollapseProps = {
  children?: React.ReactNode;
};

type NavbarNavProps = {
  children?: React.ReactNode;
  orientation: keyof typeof style.nav;
};

type NavbarItemProps = {
  children?: React.ReactNode;
  className?: string;
};

type NavbarLinkProps = {
  children?: React.ReactNode;
  href: string;
  active?: boolean;
  activeClass?: string;
};

const style = {
  navbar: `fixed px-4 py-2 shadow top-0 left-0 w-full
    lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  brand: `cursor-pointer font-bold inline-block py-1.5 text-2xl whitespace-nowrap
    hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200`,
  collapse: {
    default: `border-t border-gray-200 fixed left-0 mt-2 shadow py-2 text-center
      lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0
      lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100
      lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in
      lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

interface ContextProps {
  open: boolean;
  toggle: () => void;
}

const Context = createContext({} as ContextProps);

const Navbar = ({ children, className }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef<any>(null);

  const toggle = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) {
            return;
          }

          setOpen(false);
        }
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => useContext(Context);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }: NavbarBrandProps) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

const NavbarToggler = () => {
  const { toggle } = useToggle();

  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
};

const NavbarCollapse = ({ children }: NavbarCollapseProps) => {
  const { open } = useToggle();

  return (
    <div
      style={{ backgroundColor: "inherit" }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const NavbarNav = ({ children, orientation }: NavbarNavProps) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

const NavbarItem = ({ children, className }: NavbarItemProps) => (
  <li className={`${className} ${style.item}`}>{children}</li>
);

/**
 * You can wrap the a tag with Link and pass href to Link if you are using either
 * Create-React-App, Next.js or Gatsby
 */
const NavbarLink = ({ children, href, active, activeClass }: NavbarLinkProps) => (
  <a href={href} className={active ? activeClass : ""}>
    {children}
  </a>
);

export {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarItem,
  NavbarLink,
};
