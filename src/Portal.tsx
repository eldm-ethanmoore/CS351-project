import React, {useEffect, useState} from "react";
import axios from "axios";
import AddRep from './AddRep';

const Portal = () => {
  
  const [name, setUserName] = useState("Megan");
  const [password, setPassword] = useState("90085");
  const [loggedIn, setLoggedIn] = useState(false);
  const [repData, setRepData] = useState([{FirstName: ""}]);  
<<<<<<< HEAD
  const [subDash, setSubDash] = useState(0);
=======
  
  const [task, setTask] = useState("0");

  const [coustName, setCoustName] = useState("");
  const [limit, setLimit] = useState("");
>>>>>>> 6dadc843cf85a4d0890e307b8bc65e18778473e3

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

<<<<<<< HEAD
  useEffect(() => {
    console.log(name)
    console.log(password)
    console.log("sub dash num: "+subDash)
  }, [name, password, subDash])

  const RenderUserDash = () => {
=======
  const RenderUserDash = () => {    
>>>>>>> 6dadc843cf85a4d0890e307b8bc65e18778473e3
    return(
      <>

        <h1 className="name" >Hey {name} </h1>
        <h1 className="name" >{loggedIn}</h1>

<<<<<<< HEAD

        <button onClick={() => setSubDash(1)}>Generate Report</button>
        <br></br>
=======
      
        <button>Generate Report</button>
  
        <button onClick = {UpdateAddRepVal}>Add Rep</button>
>>>>>>> 6dadc843cf85a4d0890e307b8bc65e18778473e3

        <button onClick = {UpdateLimVal}>Update Customer Credit Limit</button>

<<<<<<< HEAD
        <button onClick={() => setSubDash(2)}>Add Rep</button>

        <br></br>


        <button onClick={() => setSubDash(3)}>Update Customer Credit Limit</button>

        <br></br>


        <button onClick={() => {setPassword("");setUserName("");setLoggedIn(false);}}>Exit</button>

        <br></br>

        

=======
        <button onClick = {UpdateExitVal}>Exit</button>
>>>>>>> 6dadc843cf85a4d0890e307b8bc65e18778473e3
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
<<<<<<< HEAD
      {loggedIn && subDash === 2 && <AddRep username={name} password={password} changeSubDash={() => setSubDash(0)}/>}
=======
      {loggedIn && repData !== null && task == "1" && <UpdateLim/> }
      {loggedIn && repData !== null && task == "2" && <AddRep/> }

      {loggedIn && repData !== null && task == "5" && <UpdateExit/> }
>>>>>>> 6dadc843cf85a4d0890e307b8bc65e18778473e3
    </>
  );
}
export default Portal;