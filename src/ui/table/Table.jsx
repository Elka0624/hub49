import React from 'react'
import Data from '../../DataBase/Data'
import './Table.css'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const Table = () => {
  return (
    <div className='table'>
      <table>
        <thead>
          <th>Id</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Auto Number</th>
          <th>Instagram</th>
          <th>Phone Number</th>
          <th>Email</th>
        </thead>
        <tbody>
          {Data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td><img src={d.userImage} className='imgClass' alt="Jizzax 712" /></td>
              <td className='td'><ContactEmergencyIcon /> {d.name}</td>
              <td className='td autoNumber'>{d.autoNumber}</td>
              <td className='td'>{d.insta}</td>
              <td className='td'>{d.phoneNumber}</td>
              <td className='td'>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
