import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet  from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FuctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import QuoteGenerator from './component/QuoteGenerator';
import RightView from './component/RightView';
import LeftView from './component/LeftView';
import Button  from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react';
import LeftTable from './component/LeftTable';
import RightTable from './component/RightTable';

function App() {
  // render(){
// function App() {
  const [add , setAdd] = useState(false)
  const [refresh , setRefresh] = useState(false)
  const [save , setSave] = useState(false)

        
    return (

      <div className="App">
            {/* <h5 className="ms-2">Selection ID configuration</h5>
    <div className="d-flex">
     <LeftTable add={add} setAdd={setAdd} refresh={refresh} setRefresh={setRefresh} save={save} setSave={setSave}/>
     <RightTable add={add} setAdd={setAdd} refresh={refresh} setRefresh={setRefresh} save={save} setSave={setSave}/>
    </div>
    <div className="d-flex">
    <div className="d-flex justify-content-center col-6">
    <Button variant="primary" className="me-1" onClick={()=>setAdd(!add)}>Add</Button>{' '}
    <Button variant="primary" className="me-1" onClick={()=>setRefresh(!refresh)}>Refresh</Button>{' '}
    <Button variant="primary" className="me-1" onClick={()=>setSave(!save)}>Save</Button>{' '}
    </div>
    <div className="d-flex justify-content-center col-6">
    <Button variant="primary" className="me-1">Add</Button>{' '}
    </div>
    </div>   */}
        <h5 className="ml-2">Selection ID Configuration</h5> 
        <div className="d-flex">&nbsp;
        <LeftView /> &nbsp;&nbsp;
        <RightView />&nbsp;
        </div>
        
        <div className="d-flex">
        <div className= "d-flex justify-content-center col-6">
        <Button variant="primary" className="me-1" onClick={this.add}>Add</Button>{' '}
        <Button variant="primary" className="me-1" onClick={()=>setRefresh(!refresh)}>Refresh</Button>{' '} 
          <Button variant="primary" className="me-1" onClick={this.saveData}>Save</Button>{' '}  
         </div>
        <div className="d-flex justify-content-center col-6">
       <Button variant="primary" className="me-1"  onClick={this.add}>Add</Button>{' '} 
        </div>
        </div>

        {/* <QuoteGenerator /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batsman"/> */}
        {/* <p>This is a children props</p>
         <Greet name="Clark" heroName="Superman"/>
         <button>Action</button>
         <Greet name="Diana" heroName="Wonder Women"/>
         <Greet />
         <Welcome name="Bruce" heroName="Batsman"/>
         <Welcome name="Clark" heroName="Superman"/> */}
         {/* <Welcome name="Diana" heroName="Wonder Women"/> */}
         {/* <Welcome />  */}
        {/* <Hello /> */}
      </div>
    );
  }


export default App;

