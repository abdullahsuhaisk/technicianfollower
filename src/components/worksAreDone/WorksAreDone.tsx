import React from 'react'
import { Table } from '../ui/Table/Table';
// import Table from '../ui/Table/RCTable'

export const WorksAreDone = ({ jobs }: any) => {  
  const columns = ['Kat', 'name', 'Sorun'];
  
  if(jobs.length >0) {
    return (
      <div className='font'>
        <Table jobs={jobs} columns={columns} />
        {/* <Table columns={columns} data={jobs} /> */}
      </div>
    )
  } return null;
}
