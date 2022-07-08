import React from "react";

import style from "./MAP.module.css";

const usersList = [
  {
    username: "Vlad",
    surname: "H",
    age: "25",
  },
  {
    username: "Vlad",
    surname: "H",
    age: "25",
  },
  {
    username: "Vlad",
    surname: "H",
    age: "25",
  },
  {
    username: "Vlad",
    surname: "H",
    age: "25",
  },
];

const TableTitle = (props) => {
  const { username, surname, age } = props;
  return (
    <div className={style.table_title}>
      <div>{username}</div>
      <div>{surname}</div>
      <div>{age}</div>
    </div>
  );
};

const TableReg = () => {
  return (
    <table className={style.table}>
      <TableTitle username="Ім'я користувача" surname="Прізвище" age="Вік" />
      <tr className={style.table_rows}>
        {usersList.map((user) => (
          <>
            <th className={style.name_of_user}>{user.username}</th>
            <th className={style.surname_of_user}>{user.surname}</th>
            <th className={style.age_of_user}>{user.age}</th>
          </>
        ))}
      </tr>
    </table>
  );
};

export default TableReg;
