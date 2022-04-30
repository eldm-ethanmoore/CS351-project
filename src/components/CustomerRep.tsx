import React, {useEffect, useState} from 'react';
import axios from 'axios';
/*	

  For Each Representative	Generate Report 
  ( # of customers, average balance, and first and last name of rep)

*/
interface repProps {
  username: string;
  password: string;
  changeSubDash: () => void;
}

const CustomerRep = ({username, password, changeSubDash}:repProps) => {
  
    const givePriceReport = (repProp: any) => {
        console.log(repProp)
        return(
          <>
            <h2>{repProp.name}</h2>
            <ul>
              <li>Total Quoted Price of all Orders: ${repProp.sum}</li>
            </ul>
          </>
        );
    }

    const [nameInput, setName] = useState("Please type in a name")
    const [repData, setRepData] = useState([])
    const [gotData, setGotData] = useState(false);
  
    const handleSearchSubmit = (event: any) => {
        
      setGotData(true)
      event.preventDefault();
      axios.post('http://localhost/customerRep.php', 
      'user='+username+'&pass='+password+'&nameInput='+nameInput
      ).then((response)=>{
        console.log(response.data);
        console.log(gotData);
        setRepData(response.data);
      });
    }
  
    return(
      <>
        <h1 className="titleText">Customer Search</h1>
          <form onSubmit={ handleSearchSubmit }>
  
            <label>Which customer would you like to search for?: 
            <input 
              type="text" 
              value={nameInput}
              onChange={e => setName(e.target.value)}
            />
            </label>
            <input type="submit" />
            </form>
            <br></br>
            <div style={{'color': 'white'}}>
                {gotData && givePriceReport(repData)}
            </div>
   </>
    );
   }

export default CustomerRep;