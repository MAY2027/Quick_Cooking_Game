import {dishes} from "../Ingredients/ingre";
import { useLocation,useNavigate } from "react-router-dom";
import "./Step5.css";

function Step5() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {choicedDish, attemptCount} =state;

    let score = 20;
    if (attemptCount ===1) score = 100;
    else if (attemptCount ===2)score = 80;
    else if (attemptCount ===3)score = 60;
    else score =20;

    return (
        <div className="step5">
            <h2>Your cooking knowledge skill</h2>

            <img 
            src={dishes[choicedDish].image} 
            alt={choicedDish}
            className="dish-photo" />

            
            <h2 ><h1>⭐{score}</h1>points</h2>

            <button onClick={() =>navigate("/")}>Go To Home</button>
        </div>
    );
}

export default Step5;