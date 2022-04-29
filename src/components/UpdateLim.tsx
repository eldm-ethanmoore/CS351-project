import React, {useState} from 'react';
import axios from 'axios';

const UpdateLim = () => {

  const [coustName, setCoustName] = useState("Janet Sefton");
  const [limit, setLimit] = useState("69.69");
  const [coustNum, setCoustNum] = useState("90097");
  const [subDash, setSubDash] = useState(false);

  const handleLimSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost/updateLim.php', 
      'coustName='+coustName+'coustNum='+coustNum+'limit='+limit).then((response)=>{
      console.log(response.data);

      if(response.data.length > 0) {
        setSubDash(true);

      }
    }

    );
  }

  const DisplayUpdate = () => {
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

          <label>Enter coustomer Number:  
          <input 
            type="text" 
            value={coustNum}
            onChange={(e) => setCoustNum(e.target.value)}
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

          <input type="submit" 
            value = "Update"
          />
        </form>
      </>

      


    );
  }   

  const AfterDisp = () => {
    return (
      <> 
      <button> Hey </button>

      </>
    );
  }

  return (
    <>
      <DisplayUpdate/>
      {subDash && <AfterDisp/>}
     </>
  );
}
export default UpdateLim;