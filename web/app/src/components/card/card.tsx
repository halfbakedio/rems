type Props = {
  children?: React.ReactNode;
  className?: string;
};

const style = {
  card: `relative flex flex-col border-gray-200 rounded-lg`,
  cardBody: `block flex-grow flex-shrink p-5`,
  cardTitle: `font-medium text-gray-700 mb-3`,
  cardText: `text-gray-500`,
};

const inlineStyle = {
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 16%), 0 1px 4px 0 rgb(0 0 0 / 12%)",
};

const Card = ({ children }: Props) => {
  return (
    <div className={style.card} style={inlineStyle}>
      {children}
    </div>
  );
};

const CardBody = ({ children }: Props) => {
  return <div className={style.cardBody}>{children}</div>;
};

const CardTitle = ({ children }: Props) => {
  return <div className={style.cardTitle}>{children}</div>;
};

const CardText = ({ children }: Props) => {
  return <div className={style.cardText}>{children}</div>;
};

export { Card, CardBody, CardTitle, CardText };
