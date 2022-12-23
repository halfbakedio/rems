import classNames from "classnames";
import { nanoid } from "nanoid";

type TableProps = {
  children?: React.ReactNode;
  className?: string;
};

type TableHeaderProps = {
  className?: string;
  columns: Array<React.ReactNode>;
};

type TableBodyProps = {
  children?: React.ReactNode;
};

type TableRowProps = {
  className?: string;
  values: Array<string | number>;
};

const style = {
  table: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
  tableHeader: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
  tableHeaderColumn: "py-3 px-6",
  tableRow: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
  tableData: "py-4 px-6",
  tableDataLeader: "font-medium text-gray-900 whitespace-nowrap dark:text-white",
};

const Table = ({ children, className }: TableProps) => {
  const classes = classNames(className, style.table);

  return (
    <table className={classes}>
      {children}
    </table>
  );
};

const TableHeader = ({ className, columns }: TableHeaderProps) => {
  const classes = classNames(className, style.tableHeader);

  return (
    <thead className={classes}>
      <tr>
        {columns.map((column: React.ReactNode) => (
          <th key={nanoid()} scope="col" className={style.tableHeaderColumn}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ children }: TableBodyProps) => (
  <tbody>
    {children}
  </tbody>
);

const TableRow = ({ className, values }: TableRowProps ) => {
  const classes = classNames(className, style.tableRow);

  return (
    <tr className={classes}>
      {values.map((value: string | number, index: number) => {
        const dataClasses = classNames(
          style.tableData,
          (index == 0) ? style.tableDataLeader : undefined,
        );
        const extra = (index == 0) ? { scope: "row" } : undefined;

        return (
          <td key={nanoid()} {...extra} className={dataClasses}>
            {value}
          </td>
        );
      })}
    </tr>
  );
};

export { Table, TableBody, TableHeader, TableRow };
