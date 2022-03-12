import React from 'react'

const EditForm = ({saveClick}) => {
  return (
    <tr>
      <td>
        
      </td>
      <td>
        
      </td>
      <td>
      
      </td>
      <td>
      <input type="text" name='amount'/>
      </td>
      <td>
        <button type='submit' onClick={(saveClick)}>Save</button>
      </td>
    </tr>
  )
}

export default EditForm
