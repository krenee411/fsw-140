import { useState, useEffect, Fragment} from 'react'
import './App.css';
import axios from 'axios'
import ReadOnly from './components/ReadOnly';
import EditForm from './components/EditForm';


function App() {

const [type, setType] = useState("")
const [color, setColor] = useState("")
const [amount, setAmount] = useState("")

const [storeState, setStoreState] = useState([])

const [editInfo, setEditInfo]= useState(null)



const handleEditClick = (e, storeData) => {
  e.preventDefault()
  setEditInfo(storeData.id)
} 




const submitData = () => {
  axios.post('http://localhost:9000/api/insert',{
    type: type, 
    color: color, 
    amount: amount,
}).then(()=> {
  setStoreState([...storeState, {type: type, color: color, amount: amount}])
    });
};




 useEffect(()=> {
  axios.get('http://localhost:9000/api/getposts')
  .then((storeData) => {
    setStoreState(storeData.data)
    console.log(storeData.data)
  })
  
}, [] );
 

  return (
    <div className='App'>
        <h1 id='header'>ODDS AND ENDS INVENTORY</h1>
      <div id='addForm'>
        <form>
          <lable>Fabric Type: </lable>
          <input type="text" name='type' required onChange={(e) => {setType(e.target.value)}}/>
          <lable>Fabric Color: </lable>
          <input type="text" name='color' required onChange={(e) => {setColor(e.target.value)}}/>
          <lable>Amount in Yards: </lable>
          <input type="text" name='amount' required onChange={(e) => {setAmount(e.target.value)}}/>
          <button onClick={submitData}>Submit</button>
        </form>
      </div>
      <form id='tableForm'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Color</th>
              <th>Amount</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {storeState.map((storeData) => (
              <Fragment>
                {editInfo === storeData.id ? (
                <EditForm storeData={storeData} />
                ):(
                <ReadOnly 
                  storeData={storeData}
                  handleEditClick={handleEditClick}
                  
                />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
