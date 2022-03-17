import axios from 'axios'
import React, { useState, useEffect } from 'react'


const EditForm = ({storeData}) => {

  const [newAmount, setNewAmount]= useState('')
  console.log(newAmount)
  
  
 
  const saveClick = (id) => {
      axios.put(`http://localhost:9000/api/update/:${id}`,{
        id: storeData.id,
        amount: newAmount
      })
    }

  return (
    
    <tr>
        <td>
        {storeData.id}
        </td>
        <td>
          {storeData.type}
        </td>
        <td>
          {storeData.color}
        </td>
        <td>
          <input type="text" name='amount' value={newAmount} onChange={(e) => {setNewAmount(e.target.value)}} />
        </td>
        <td>
          <button type='submit' onClick={() => {saveClick(storeData.id)}}>Save</button>
        </td>
      </tr>
    
  )
}

export default EditForm
