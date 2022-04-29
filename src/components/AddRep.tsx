import React, {useState} from 'react';
import axios from 'axios';

 interface repProps{
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

        <label>Enter your RepNum: 
          <input 
            type="text" 
            value={repnum}
            onChange={e => setRepNum(e.target.value)}
          />
        </label>

        <br></br>

        <label>Enter your FirstName: 
          <input 
            type="text" 
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <br></br>
        
        <label>Enter your LastName:
          <input 
            type="text" 
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        
        <br></br>

        <label>Enter your Street:
          <input 
            type="text" 
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>

        <br></br>

        <label>Enter your City:
          <input 
            type="text" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>       

        <br></br>

        <label>Enter your State:
          <input 
            type="text" 
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>       

        <br></br>

        <label>Enter your Postal Code:
          <input 
            type="text" 
            value={postalcode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>       

        <br></br>

        <label>Enter your Commision:
          <input 
            type="text" 
            value={commision}
            onChange={(e) => Number(setCommision(e.target.value))}
          />
        </label>

        <br></br>

        <label>Enter your Rate:
          <input 
            type="text" 
            value={rate}
            onChange={(e) => Number(setRate(e.target.value))}
          />
        </label>

        <br></br>

        <input type="submit" />
        </form>
    </>
  );
 }
 export default AddRep;