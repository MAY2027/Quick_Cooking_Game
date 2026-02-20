import {Routes,Route} from "react-router-dom";
import Step1 from "./CookingJourney/Step1";
import Step2 from "./CookingJourney/Step2";
import Step3 from "./CookingJourney/Step3";
import Step4 from "./CookingJourney/Step4";
import Step5 from "./CookingJourney/Step5";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Step1/>}/>
      <Route path="/step2" element= {<Step2/>}/>
      <Route path="/step3" element= {<Step3/>}/>
      <Route path="/step4" element= {<Step4/>}/>
      <Route path="/step5" element= {<Step5/>}/>


    </Routes>
  );
}

export default App;