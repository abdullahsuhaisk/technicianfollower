import React from 'react'
import RCTable from "rc-table";

const Table = ({columns, data}: any) => {
  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     width: 100,
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //     width: 100,
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "email",
  //     key: "email",
  //     width: 200,
  //   },
  //   {
  //     title: "Permanent",
  //     dataIndex: "permanent",
  //     key: "permanent",
  //     width:100,
  //   },
  // ];

  // const data = [
  //   {
  //     name: "Jack",
  //     age: 28,
  //     email: "jack@gmail.com",
  //     key: "1",
  //     permanent: "yes",
  //   },
  //   {
  //     name: "Rose",
  //     age: 36,
  //     email: "rose@gmail.com",
  //     key: "2",
  //     permanent: "no",
  //   },
  //   {
  //     name: "Wick",
  //     age: 23,
  //     email: "wick@gmail.com",
  //     key: "3",
  //     permanent: "no",
  //   },
  //   {
  //     name: "Marry",
  //     age: 27,
  //     email: "marry@gmail.com",
  //     key: "4",
  //     permanent: "no",
  //   },
  // ];

  return (
    <RCTable
    columns={columns}
    data={data}
    tableLayout="auto"
  />
  )
}

export default Table