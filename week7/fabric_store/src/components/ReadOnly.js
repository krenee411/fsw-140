import React from 'react'
import axios from 'axios'
//in the () it will be {storeData}
const ReadOnly = ({storeData, handleEditClick}) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9000/api/delete/${id}`,{
      id: storeData.id
    })
  }
  return (
    <tr>
    <td>{storeData.id}</td>
    <td>{storeData.type}</td>
    <td>{storeData.color}</td>
    <td>{storeData.amount}</td>
    <td>
      <button type='button' onClick={(e) => handleEditClick(e,storeData)}>Edit</button>
      <button type='button' onClick={() => {handleDelete(storeData.id)}}>Delete</button>
    </td>
  </tr>
  )
}

export default ReadOnly
