import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route,Routes,Navigate,} from "react-router-dom";
import SignIn from "./pages/Signin";
import BondsOverview from "./pages/BondsOverview";
import MaturityAnalysis from "./pages/MaturityAnalysis";
import MyPortfolio from "./pages/MyPortfolio";
import SignUp from "./pages/Signup";
//either Signup or Signup-experiment


function App() {
  return (


    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={SignUp} />} />
      <Route path="*" element={<SignIn />} />
      <Route path="/overview" element={<BondsOverview />} />
      <Route path="/maturity" element={<MaturityAnalysis />} />
      <Route path="/portfolio" element={<MyPortfolio />} />


    </Routes>

     
   
  );
}

export default App;
