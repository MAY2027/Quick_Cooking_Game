// export default function Step4() {
//   return <div>Step4</div>;
// }
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Step4.css"

function Step4() {
   
    const navigate = useNavigate();
    const location = useLocation();

    const {
    pass,
    correctCount,
    choicedDish,
    attemptCount,
  } = location.state;

    const [isWaiting, setIsWaiting] = useState(true);
    
    useEffect( () => {
        const timer = setTimeout ( () =>{
            setIsWaiting(false);
        }, 2500);

        return()=>clearTimeout(timer);
    }, []);

    const handleViewScore = () =>{
        navigate( "/step5", {
            state: {
                pass,
                correctCount,
                choicedDish,
                attemptCount,
                
            },
        });
    };
    const handleTryAgain = () => {
        navigate("/step3", {
            state: {
                choicedDish,
            },
        });
    };

    return (
        <div className="step4">
            {isWaiting ? (
                <div className="loading">
                    <h2> Loading...💕</h2>
                    <p>Please wait</p>
                </div>
            ): (
                <div className="result">
                    <h2>{pass ? "PASS⭕" : "FAIL❌"}</h2>
                    {pass ? (
                    <button onClick={handleViewScore}> View Score</button>

                    ): (
                        <button onClick={handleTryAgain}>Try Again</button>
                    )}
                   
                </div>
            )}
        </div>
    );
}

export default Step4;