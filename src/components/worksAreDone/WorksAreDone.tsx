import React from 'react'
import { Table } from '../ui/Table/Table';
// import Table from '../ui/Table/RCTable'

export const WorksAreDone = ({ jobs }: any) => {
  console.log(jobs);
  
  const columns = ['Kat', 'name', 'Sorun']
  return (
    <div className='font'>
      <Table jobs={jobs} columns={columns} />
      {/* <Table columns={columns} data={jobs} /> */}
    </div>
  )
}
