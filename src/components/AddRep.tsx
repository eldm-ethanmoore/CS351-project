import { useState } from 'react';
import axios from 'axios';

import "../css/Portal.css"

interface repProps {
  username: string;
  password: string;
  changeSubDash: () => void;
}

const AddRep = ({username, password, changeSubDash}:repProps) => {
  
  const [repnum, setRepNum] = useState("75")
  const [lastname, setLastName] = useState("Moore")
  const [firstname, setFirstName] = useState("Ethan")
  const [street, setStreet] = useState("123 Street")
  const [city, setCity] = useState("Bowling Green")
  const [state, setState] = useState("KY")
  const [postalcode, setPostalCode] = useState("42104")
  const [commision, setCommision] = useState("30000.50")
  const [rate, setRate] = useState("0.07")

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost/addRep.php', 
    'user='+username+'&pass='+password+'&repnum='+repnum+'&lastname='+lastname+'&firstname='+firstname+'&street='+street+'&city='+city+'&state='+state+'&postalcode='+postalcode+'&commision='+commision+'&rate='+rate
    ).then((response)=>{
      console.log(response.data);
      if(response.data.length > 0)
      {
        //setRepData(response.data);
        changeSubDash()
      }
    });
  }

  return(
    <>
      <h1 className="titleText">Add Representative</h1>
        <form onSubmit={handleSubmit}>

          <label>Enter your RepNum <br />
            <input 
              type="text" 
              placeholder={repnum}
              onChange={e => setRepNum(e.target.value)}
            />
          </label>

          <br/><br/>

          <label>Enter your FirstName <br />
            <input 
              type="text" 
              placeholder={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          <br/><br />
          
          <label>Enter your LastName <br />
            <input 
              type="text" 
              placeholder={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          
          <br/><br />

          <label>Enter your Street <br />
            <input 
              type="text" 
              placeholder={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </label>

          <br/><br />

          <label>Enter your City <br />
            <input 
              type="text" 
              placeholder={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>       

          <br/><br />

          <label>Enter your State <br />
            <input 
              type="text" 
              placeholder={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>       

          <br/><br />

          <label>Enter your Postal Code <br />
            <input 
              type="text" 
              placeholder={postalcode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </label>       

          <br/><br />

          <label>Enter your Commision <br />
            <input 
              type="text" 
              placeholder={commision}
              onChange={(e) => Number(setCommision(e.target.value))}
            />
          </label>

          <br/><br />

          <label>Enter your Rate <br />
            <input 
              type="text" 
              placeholder={rate}
              onChange={(e) => Number(setRate(e.target.value))}
            />
          </label>

          <br/><br />

          <input className="rd-submit" type="submit" />
        </form>
    </>
  );
}

export default AddRep;
