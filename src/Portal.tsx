import React, {useState, useEffect} from "react";
import axios from "axios";

const Portal = () => {
  
  const [name, setUserName] = useState("Megan");
  const [password, setPassword] = useState("90085");
  const [loggedIn, setLoggedIn] = useState(false);
  const [repData, setRepData] = useState([{FirstName: ""}]);  

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
        <br></br>


        <button>Add Rep</button>

        <br></br>


        <button>Update Customer Credit Limit</button>

        <br></br>


        <button>Exit</button>

        <br></br>

        

      </>
    );
  }


  return(
    <>
      {!loggedIn && RenderDash()}
      {loggedIn && repData !== null && <RenderUserDash/>}

    </>
  );
}
export default Portal;