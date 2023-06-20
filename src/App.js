import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Congrats from './pages/congrats/Congrats';
import CongratsThere from './pages/congratsThere/CongratsThere';
import CongratsTwo from './pages/congratsTwo/CongratsTwo';
import CreatePassword from './pages/createPassword/CreatePassword';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import Login from './pages/login/Login';
import PhotoPage from './pages/photoPage/PhotoPage';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import Published from './pages/published/Published';
import RecoveryLink from './pages/RecoveryLink/RecoveryLink';
import StartYour from './pages/startYour/StartYour';
import TablePage from './pages/tablePage/tablePage';
import Working from './pages/working/Working';
import WorkingTwo from './pages/workingTwo/WorkingTwo';
// import { useState } from 'react'
// import Stepper from './ui/stepper/Stepper.jsx'



function App() {

  // const [activeStep, setActiveStep] = useState('');
  // const [skipped, setSkipped] = React.useState(new Set());
  // // const isStepOptional = (step) => {
  // //   return step === 1;
  // // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };
  return (
    <div className="App">

      {/* <Stepper /> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
        <Route path='/recoveryLink' element={<RecoveryLink />} />
        <Route path='/createPassword' element={<CreatePassword />} />
        <Route path='/startYour'  element={<StartYour  />} />
        <Route path='/profileDetils' element={<ProfileDetails />} />
        <Route path='/congrats' element={<Congrats /> } /> 
        <Route path='/working' element={<Working /> } />
        <Route path='/table' element={<TablePage /> } />
        <Route path='/congratsTwo' element={<CongratsTwo /> } />
        <Route path='/workingTwo' element={<WorkingTwo /> } />
        <Route path='/photoPage' element={<PhotoPage /> } />
        <Route path='/congratsThere' element={<CongratsThere /> } />
        <Route path='/published' element={<Published /> } />
      </Routes>
    </div>
  );
}

export default App;
