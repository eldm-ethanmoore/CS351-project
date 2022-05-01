import { useState } from 'react';
import axios from 'axios';

import "../css/Portal.css"

interface limProps {
  changeSubDash: () => void;
}

const UpdateLim = ({changeSubDash}:limProps) => {

  const [coustName, setCoustName] = useState("Toys Galore");
  const [limit, setLimit] = useState("69.69");
  const [coustNum, setCoustNum] = useState("126");
  const [subDash, setSubDash] = useState(false);

  const handleLimSubmit = (event: any) => {
    event.preventDefault();
    axios.post('http://localhost/updateLim.php', 
      'coustName='+coustName+'&coustNum='+coustNum+'&limit='+limit).then((response)=>{
      console.log(response.data);

      if(response.data) {
        changeSubDash()
      }
    }

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
        <h1 className="titleText">Update Customer Credit Limit</h1>
        <form onSubmit={handleLimSubmit}>
          <label>Enter customer name <br />
            <input 
              type="text" 
              value={coustName}
             onChange={(e) => setCoustName(e.target.value)}
           />
          </label>

          <br/><br />

          <label>Enter customer number<br />
          <input 
            type="text" 
            value={coustNum}
            onChange={(e) => setCoustNum(e.target.value)}
          />
          </label>

          <br/><br />
      
          <label>Enter new limit<br />
          <input 
            type="text" 
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
          </label>
      
          <br/><br />

          <input type="submit" 
            value = "Update"
            className='rd-submit'
          />
        </form>
      {subDash && <AfterDisp/>}
      </>
  );
}

export default UpdateLim;