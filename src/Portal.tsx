import React, {useEffect, useState} from "react";
import axios from "axios";
import AddRep from './components/AddRep';
import UpdateLim from './components/UpdateLim';
import GenerateRepReport from './components/GenerateRepReport';
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

        <input type="submit"
        value = "Login" />
        </form>
      </>
    );
  }


  const RenderUserDash = () => {    
    return(
      <>

        <h1 className="name" >Hey {name} </h1>
        <h1 className="name" >{loggedIn}</h1>


        <button onClick={() => setSubDash(1)}>Generate Representative Report</button>
        <br></br>
        <button onClick = {() => setSubDash(2)}>Update Customer Credit Limit</button>
        <br></br>
        <button onClick={() => setSubDash(3)}>Add Rep</button>
        <br></br>
        <button onClick={() => setSubDash(4)}>Generate General Report</button>
        <br></br>
        <button onClick={() => {setPassword("");setUserName("");setLoggedIn(false);setSubDash(0);}}>Exit</button>
      </>
    );
  }




  return(
    <>
      {!loggedIn && RenderDash()}
      {loggedIn && repData !== null && <RenderUserDash/>}
      {loggedIn && repData !== null && subDash === 1 && <GenerateRepReport username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
      {loggedIn && repData !== null && subDash === 2 && <UpdateLim/>}
      {loggedIn && repData !== null && subDash === 3 && <AddRep username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
    </>
  );
}
export default Portal;