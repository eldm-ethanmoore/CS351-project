import { useState } from "react";

import axios from "axios";
import AddRep from './components/AddRep';
import UpdateLim from './components/UpdateLim';
import GenerateRepReport from './components/GenerateRepReport';
import CustomerRep from './components/CustomerRep';

import './css/Portal.css';

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
          <label>Username<br/>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label><br/>

          <br/>
          
          <label>Password<br/>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label><br/>
          
          <br/>

          <input 
            type="submit"
            value = "Login"
            className="rd-submit"
          />
        </form>
      </>
    );
  }

  const RenderUserDash = () => {    
    return(
      <>

        <h1 className="name" >Hello {name}. </h1>
        <h1 className="name" >{loggedIn}</h1>

        <button className="rd-submit" onClick={() => {setSubDash(1);console.log("THis works")}}>Generate Representative Report</button>
        <br/>
        <button className="rd-submit" onClick = {() => setSubDash(2)}>Update Customer Credit Limit</button>
        <br/>
        <button className="rd-submit" onClick={() => setSubDash(3)}>Add Rep</button>
        <br/>
        <button className="rd-submit" onClick={() => setSubDash(5)}>Generate Total Quoted Price Report</button>
        <br/>
        <button className="rd-submit" onClick={() => {setPassword("");setUserName("");setLoggedIn(false);setSubDash(0);}}>Exit</button>
        <hr/>
      </>
    );
  }

  return(
    <>
      {!loggedIn && RenderDash()}
      {loggedIn && repData !== null && <RenderUserDash/>}
      {loggedIn && repData !== null && subDash === 1 && <GenerateRepReport username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
      {loggedIn && repData !== null && subDash === 2 && <UpdateLim changeSubDash={() => setSubDash(0)}/>}
      {loggedIn && repData !== null && subDash === 3 && <AddRep username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
      {loggedIn && repData !== null && subDash === 5 && <CustomerRep username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
    </>
  );
}

export default Portal;
