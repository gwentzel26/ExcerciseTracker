import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercise-list";
import EditExercise from "./components/edit-exercises";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes> 
        <Route path='/' element = {<ExercisesList/>} />
        <Route path='/edit/:id' element = {<EditExercise/>} />
        <Route path='/create' element = {<CreateExercise/>} />
        <Route path='/user' element = {<CreateUser/>} />
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
