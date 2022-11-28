import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Model from "./Components/model/model";

function App() {

  const [Mode, setMode] = useState('light');
  //const [Text, setText] = useState('dark');
  const [Value, setValue]= useState('')
  const [color, setColor] = useState('black')

  // const onclicked=(val)=>{
  //   setValue(val)
  // }
  

  const toggleMode=() =>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#272829";
      document.body.style.color="white";
      setColor('white')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      setColor('black')
    }
  }
  const postSearchHandler=(search)=>{
    if(search!=''){
      search+='/'
    }
    setValue(search)
  }

  return (
    
    <>
  {/* console.log({Value}) */}

      {/* <Navbar title = "My-App" Home = "Home"/> */}
      {/* <Navbar/> */}
      <Navbar Mode={Mode} clicked={postSearchHandler} toggleMode={toggleMode}/>
      {/* <button Model={Model}>Model</button> */}
      <loginform/>

    <div >
      
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard color={color} value1={Value}/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
     
      {/* /* <Dashboard></Dashboard> */}
      </div>
      {/* <p>{Value}</p> */}
      <div className="App">
        <Dashboard />
      </div> 
    </>
  );
}

export default App;
