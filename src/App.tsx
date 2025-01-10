import React, { useState } from 'react';
import './App.css';
import {Advanced, Greeting, Notification, Person, TechnologistList } from './components/greeting';
import { Button, Input } from './components/inputAndButton';
import { ContainerStyles } from "./components/containerStyles"
import { LoginComp } from './components/useStatehook/login';
import { UseReducerHook } from './components/useReducerhook.tsx/useReducerHook';
import { DomRef } from './components/useRefhook/domRefs';
import { MutableRefs } from './components/useRefhook/mutableRefs';

function App() {
  const [firstName, setFirstName] = useState('')
  let technologies = [
    {technology:'React Js', year:2013},
    {technology:'Angular', year:2016},
    {technology:'React Js with Typescript', year:2020}] 
  let proObj = {
    name : 'Typescript',
    year : 2016
  }
  const handleSubmitAdd = (event:React.MouseEvent<HTMLButtonElement>, id:number)  => {
  console.log('Clicked..!', event, id)
  }
  const handleInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }
console.log(firstName,'firstName')
  return (
    <div className="App">
    <Greeting name="Typescript"/>
    <Person info={proObj}/>
    <TechnologistList technologiesInfo ={technologies}/>
    <Advanced>Typescript is used to type safety.</Advanced>
    <Notification noOfNotification={2}/>
    <Button handleClick={(event) => handleSubmitAdd(event, 1)}/><br/><br/>
    <Input handleInput={(e)=> {handleInputValue(e)}} firstName={firstName} value={firstName} name="firstName" placeholder='FirstName' />
    <ContainerStyles style={{color:"red"}}/>
    <LoginComp />
    <UseReducerHook /><br/><br/>
    <DomRef />
    <MutableRefs />
    </div>
  );
}

export default App;
