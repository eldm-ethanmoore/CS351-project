import React, {useState} from 'react';
import axios from 'axios';

const UpdateLim = () => {

  const [coustName, setCoustName] = useState("");
  const [limit, setLimit] = useState("");

  const handleLimSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost/updateLim.php', 'coustNam='+coustName+'lim='+limit).then((response)=>{
      console.log(response.data);
    });
  }

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
    </>
  );
}
export default UpdateLim;