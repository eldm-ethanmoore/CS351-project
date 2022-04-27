import React, {useEffect, useState} from 'react';
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
  const [street, setStreet] = useState("Test Street 123")
  const [city, setCity] = useState("Bowling Green")
  const [state, setState] = useState("KY")
  const [postalcode, setPostalCode] = useState("42104")
  const [commision, setCommision] = useState(30000.50)
  const [rate, setRate] = useState(0.07)

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

  useEffect(() => {
    console.log(username)
    console.log(password)
  }, [username, password])

  const CreateRep = () => {
    return(
      <>
        <form onSubmit={handleSubmit}>

        <label>Enter your RepNum: 
          <input 
            type="text" 
            value={"75"}
            onChange={(e) => setRepNum(e.target.value)}
          />
        </label>

        <br></br>

        <label>Enter your FirstName: 
          <input 
            type="text" 
            value={"Ethan"}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <br></br>
        
        <label>Enter your LastName:
          <input 
            type="text" 
            value={"Moore"}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        
        <br></br>

        <label>Enter your Street:
          <input 
            type="text" 
            value={"Test Street 123"}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>

        <br></br>

        <label>Enter your City:
          <input 
            type="text" 
            value={"Bowling Green"}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>       

        <br></br>

        <label>Enter your State:
          <input 
            type="text" 
            value={"KY"}
            onChange={(e) => setState(e.target.value)}
          />
        </label>       

        <br></br>

        <label>Enter your Postal Code:
          <input 
            type="text" 
            value={"42104"}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>       

        <br></br>

        <label>Enter your Commision:
          <input 
            type="text" 
            value={30000.50}
            onChange={(e) => setCommision(Number(e.target.value))}
          />
        </label>

        <br></br>

        <label>Enter your Rate:
          <input 
            type="text" 
            value={0.07}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </label>

        <br></br>

        <input type="submit" />
        </form>
      </>
    );
  }

  return(
    <>
      <h1 className="titleText">Add Representative</h1>
      <CreateRep/>
    </>
  );
 }
 export default AddRep;