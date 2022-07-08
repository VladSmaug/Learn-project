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

const TableTitle = () => {
  return (
    <div className={style.table_title}>
      <div>Username</div>
      <div>Surname</div>
      <div>Age</div>
    </div>
  );
};

const TableReg = () => {
  return (
    <table className={style.table}>
      <TableTitle />
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
