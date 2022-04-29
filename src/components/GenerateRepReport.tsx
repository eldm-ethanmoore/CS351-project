import React, {useState} from 'react';
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

  const getRepData = () => {
    axios.post('http://localhost/repReport.php', 
    'user='+username+'&pass='+password
    ).then((response)=>{
      console.log(response.data);
      if(response.data.length > 0)
      {
        //setRepData(response.data);
        changeSubDash()
      }
    });
  }

  return(
    <>
      {getRepData()}
    </>
  );
}

export default GenerateRepReport;