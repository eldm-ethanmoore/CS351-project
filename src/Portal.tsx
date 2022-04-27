import React, {useEffect, useState} from "react";
import axios from "axios";
import AddRep from './AddRep';

const Portal = () => {
  
  const [name, setUserName] = useState("Megan");
  const [password, setPassword] = useState("90085");
  const [loggedIn, setLoggedIn] = useState(false);
  const [repData, setRepData] = useState([{FirstName: ""}]);  
  const [subDash, setSubDash] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost/loginPortal.php', 'user='+name+'&pass='+password).then((response)=>{
      console.log(response.data);
      if(response.data.length > 0)
      {
        setLoggedIn(true);
        setRepData(response.data);
      }
    });
  }

  const RenderDash = () => {
    return(
      <>
        <h1 className="titleText">Portal Dashboard</h1>
        <form onSubmit={handleSubmit}>
        <label>Enter your username: 
          <input 
            type="text" 
            value={name}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <br></br>
        
        <label>Enter your password:
          <input 
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        <br></br>

        <input type="submit" />
        </form>
      </>
    );
  }

  useEffect(() => {
    console.log(name)
    console.log(password)
    console.log("sub dash num: "+subDash)
  }, [name, password, subDash])

  const RenderUserDash = () => {
    return(
      <>

        <h1 className="name" >Hey {name} </h1>
        <h1 className="name" >{loggedIn}</h1>


        <button onClick={() => setSubDash(1)}>Generate Report</button>
        <br></br>


        <button onClick={() => setSubDash(2)}>Add Rep</button>

        <br></br>


        <button onClick={() => setSubDash(3)}>Update Customer Credit Limit</button>

        <br></br>


        <button onClick={() => {setPassword("");setUserName("");setLoggedIn(false);}}>Exit</button>

        <br></br>

        

      </>
    );
  }


  return(
    <>
      {!loggedIn && RenderDash()}
      {loggedIn && repData !== null && <RenderUserDash/>}
      {loggedIn && subDash === 2 && <AddRep username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
    </>
  );
}
export default Portal;