import logo from './logo.svg';
import './App.css';
import React, {useState, createContext} from 'react'
import students from './models/students'
import Student from './components/Student'

export const AppContext = createContext();

function App() {
  const [learner,setLearner]=useState(students)
  return (
    <div className="App">
      <AppContext.Provider value={{learner,setLearner}}>
      <Student />
      </AppContext.Provider>
    </div>
  );
}

export default App;
