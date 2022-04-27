import React, {useState, useEffect} from "react";
import axios from "axios";

const Portal = () => {
  
  const [name, setUserName] = useState("Megan");
  const [password, setPassword] = useState("90085");
  const [loggedIn, setLoggedIn] = useState(false);
  const [repData, setRepData] = useState([{FirstName: ""}]);  
  
  const [task, setTask] = useState("0");

  const [coustName, setCoustName] = useState("");
  const [limit, setLimit] = useState("");

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

  const RenderUserDash = () => {    
    return(
      <>
        {/* <h1 className="name" >Hey {repData[0].FirstName}</h1> */}

        <h1 className="name" >Hey {name} </h1>
        <h1 className="name" >{loggedIn}</h1>

      
        <button>Generate Report</button>
  
        <button onClick = {UpdateAddRepVal}>Add Rep</button>

        <button onClick = {UpdateLimVal}>Update Customer Credit Limit</button>

        <button onClick = {UpdateExitVal}>Exit</button>
      </>
    );
  }




  const UpdateLim = () => {
  return (
    <> 
    <h1 className="titleText">Update Customer Credit Limit</h1>
    <form onSubmit={handleLimSubmit}>
        <label>Enter coustomer name: 
          <input 
            type="text" 
            value={coustName}
            onChange={(e) => setCoustName(e.target.value)}
          />
        </label>

        <br></br>
        
        <label>Enter new limit:
          <input 
            type="text" 
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </label>
        
        <br></br>

        <input type="submit" />
        </form>

    <button onClick = {Clear}>Close</button>
    </>
    );
  }
  const AddRep = () => {
    return (
      <>
      <h1 className="titleText">Add Representative</h1>

      <button onClick = {Clear}>Close</button>
      </>
    );
  }

  const UpdateExit = () => {
    setLoggedIn(false);
    setTask("0");
    return (
      <> 
      </>

    );
  }


  const handleLimSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost/updateLim.php', 'coustNam='+coustName+'lim='+limit).then((response)=>{
      console.log(response.data);

  });

  }


  const UpdateLimVal = () => {
    setTask("1");
  }
  const UpdateAddRepVal = () => {
    setTask("2");
  }
  const UpdateExitVal = () => {
    setTask("5");
  }


  const Clear = () => {
    setTask("0");
  }

  return(
    <>
      {!loggedIn && RenderDash()}
      {loggedIn && repData !== null && <RenderUserDash/>}
      {loggedIn && repData !== null && task == "1" && <UpdateLim/> }
      {loggedIn && repData !== null && task == "2" && <AddRep/> }

      {loggedIn && repData !== null && task == "5" && <UpdateExit/> }
    </>
  );
}
export default Portal;