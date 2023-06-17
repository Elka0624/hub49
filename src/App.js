import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePassword from './pages/createPassword/CreatePassword';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import Login from './pages/login/Login';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import RecoveryLink from './pages/RecoveryLink/RecoveryLink';
import StartYour from './pages/startYour/StartYour';
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
      </Routes>
    </div>
  );
}

export default App;
