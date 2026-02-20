import {useNavigate} from "react-router-dom";
import "./Step1.css"
function Step1(){
    const navigate = useNavigate();
    const handleStart = () => {
        navigate("/step2");
    };

    return(
        <div className="step1">
            <h1>Quick Cooking Challenge </h1>
            <p>Cooking Ideas Within 30s</p>
            <button onClick={handleStart}>Are You Ready</button>
        </div>
    );

}
 export default Step1;