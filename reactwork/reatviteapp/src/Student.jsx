import React from 'react'
import './Student.css';

export default function Student(props) {
  return (
   
    <div className='icard'>
        <table>
            <tbody>
                <tr>
                    <td colSpan={2}>{props.college}</td>
                </tr>
                <tr><td></td><td>{props.pic}</td></tr>
                <tr><td>Name:</td><td>{props.name}</td></tr>
                <tr><td>Branch:</td><td>{props.branch}</td></tr>
                    <tr><td>Roll_No:</td><td>{props.roll}</td></tr>
                {/* <tr>
                    <td>Name</td>
                    <td>Rahul</td>
                </tr> */}
            </tbody>
        </table>
       </div>
  )
}
