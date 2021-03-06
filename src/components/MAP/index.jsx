import React from "react";

import style from "./MAP.module.css";

const TableTitle = (props) => {
  const { username, surname, age } = props;
  return (
    <thead>
      <tr className={style.table_title}>
        <td>{username}</td>
        <td>{surname}</td>
        <td>{age}</td>
      </tr>
    </thead>
  );
};

const TableReg = ({ usersList }) => {
  return (
    <table className={style.table}>
      <TableTitle username="Ім'я" surname="Прізвище" age="Вік" />
      <tbody>
        <tr className={style.table_rows}>
          {usersList.map((user, index) => (
            <React.Fragment key={index}>
              <td className={style.table_cell}>{user.username}</td>
              <td className={style.table_cell}>{user.surname}</td>
              <td className={style.table_cell}>{user.age}</td>
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TableReg;
