import classnames from "classnames";

type Props = {
  children?: React.ReactNode,
  size: string,
  bgColor: string,
  textColor: string,
};

const Button = ({ size, bgColor, textColor, children }: Props) => {
  return (
    <button
      className={
        classnames(
          `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`,
          {
            "text-xs": size === "sm",
            "text-xl": size === "lg",
          },
        )
      }
    >
      {children}
    </button>
  );
};

export default Button;
