import React,{useEffect ,useState} from 'react';


function App() {
  
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/user").then((result)=>{
     result.json().then((resp)=>{
       
       setData(resp);
     })
    })
  },[])
  
 
  return (
    <div>    <table> 
      <tr>
       <td>id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
      </tr>
    {data.map((item , id)=>
    
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.contact}</td>
      </tr>
      
    
    )}
    </table>
    </div>
  );
}

export default App;