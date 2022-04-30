import { useEffect, useState } from 'react';
import axios from 'axios';

/*	

  For Each Representative	Generate Report 
  ( # of customers, average balance, and first and last name of rep)

*/
interface repProps {
  username: string;
  password: string;
  changeSubDash: () => void;
}

const GenerateRepReport = ({username, password, changeSubDash}:repProps) => {

  const [repReport, setRepReport] = useState([])
  const [gotData, setGotData] = useState(false);
  
  const RepBlock = (repProp: any) => {
    console.log(repProp)
    return(
      <>
        <h2>{repProp.FirstName+" "+repProp.LastName+" #"+repProp.RepNum}</h2>
        <ul>
          <li>Total Balance: {repProp.Balance}</li>
          <li>Number Of Customers: {repProp.NumOfCustomers}</li>
        </ul>
      </>
    );
  }

  useEffect(() => {

    axios.post('http://localhost/repReport.php', 
    'user='+username+'&pass='+password
    ).then((response)=>{
      if(response.data.length > 0)
      {
        setRepReport(response.data);
        console.log(gotData)
        console.log(response.data)
        //changeSubDash()
      }});
  }, [gotData])

  return(
    <>
       <br></br>
       <br></br>
        <button onClick={() => {setGotData(true);console.log(repReport.length)}}>Display Representative Results</button>
       <div style={{'color': 'white'}}>
        {gotData && repReport.map((item) => RepBlock(item))}
       </div>
    </>
  );
}

export default GenerateRepReport;