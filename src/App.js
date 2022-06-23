import './App.css';
import axios from "axios";
import Users from "./components/users"
import {useEffect, useState} from "react";

const API_URL= "http://localhost:3000/api/users";

function getAPIData(){
  return axios.get(API_URL).then(response => response.data)
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    let mounted = true;
    getAPIData().then((items)=>{
     
      if(mounted){
        setUsers(items);
      }
    });
    return ()=>(mounted = false);
  },[]);

  return (
    <div className="App">
      <h1>
          Howard University Imaging Core Facility
      </h1>
      <Users users={users}/>
    </div>
  );
}

export default App;
