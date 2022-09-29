import React from 'react'
import './Table.css'
export const Table = ({jobs, columns}: any) => {

  return (
    <table className="styled-table">
    <thead>
        <tr>
          {columns && columns.map((item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined,key: React.Key | null | undefined): any => {
            return(
              <th key={key}>{item}</th>
            )
          })}
        </tr>
    </thead>
    <tbody>
      {
        jobs && jobs.map((item: {
          date: any; floor: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; name: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; isWorkingProperly: boolean 
}, key: any)=> {
          return (
            <tr className= {key % 2 === 0 ? "active-row" : undefined} key={key}>
              <td>{item.floor}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              
              <td>{item.isWorkingProperly === true ? "Çalışıyor": "Çalışmıyor"}</td>
            </tr>
          )
        })
      }
    </tbody>
</table>
  )
}
