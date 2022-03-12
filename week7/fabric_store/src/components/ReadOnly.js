import React from 'react'
//in the () it will be {storeData}
const ReadOnly = ({storeData, handleEditClick, handleDelete}) => {
  return (
    <tr>
    <td>{storeData.id}</td>
    <td>{storeData.type}</td>
    <td>{storeData.color}</td>
    <td>{storeData.amount}</td>
    <td>
      <button type='button' onClick={(e) => handleEditClick(e,storeData)}>Edit</button>
      <button type='button' onClick={(e) => handleDelete(e,storeData)}>Delete</button>
    </td>
  </tr>
  )
}

export default ReadOnly
