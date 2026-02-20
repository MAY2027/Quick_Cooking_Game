import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {dishes} from "../Ingredients/ingre";
import "./Step3.css"


function Step3() {
    
   const location = useLocation();
   const navigate = useNavigate();
   const choicedDish = location.state?.choicedDish;

    if (!dishes[choicedDish]) {
    return <div>No Dish </div>;}

    const [timeLeft, setTimeLeft] = useState (30);
    const [choicedIngredients, setChoicedIngredients] = useState([]);
    const [isAllowed, setIsAllowed] = useState(false);

   
    

    const choiceData = dishes[choicedDish];
    const ingredients = choiceData.ingredients;
    const correctChoices= choiceData.correct;

    useEffect( () =>{
        if (isAllowed) return;

        if (timeLeft === 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval( () =>{
            setTimeLeft((prev) => prev - 1);
        },1000);

        return()=> clearInterval(timer);
       }, [timeLeft, isAllowed]);

       const toggleIngredient =(name) => {
        if (isAllowed) return;

        setChoicedIngredients ( (prev) =>{
        if (prev.includes(name)) {
         return prev.filter((i) =>i !== name);}
          if (prev.length >= 7) {
            return prev;
          }

          return [...prev, name];
       });
       };

      const handleSubmit = () => {
        if (isAllowed) return;
        setIsAllowed(true);

      const correctCount = choicedIngredients.filter((i) =>
        correctChoices.includes(i)).length;

      const pass = correctCount >= 7;

      navigate("/step4", {
        state:{
            pass,
            correctCount,
            choicedDish,
            attemptCount:1,
        },
      });
      };
         return (
        <div className="step3">
            <h2>Which (7)ingredients will you use? </h2>
            
               <div className="ingredients-data">

        {ingredients.map((item, index) => {

          const isSelected = choicedIngredients.includes(item.name);

          const isDisabled =

            !isSelected && choicedIngredients.length >= 7;



          return (

            <div

              key={item.name}

              className={`ingredient 

                ${isSelected ? "selected" : ""} 

                ${isDisabled ? "disabled" : ""}`}

              onClick={() => toggleIngredient(item.name)}

            >

              <img src={item.image} alt={item.name} />

              <p>{index + 1}. {item.name}</p>

            </div>

          );

        })}

      </div>

                  <button 
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled ={choicedIngredients.length < 7}
                  > Submit🥰</button>

                  <div className="timer">{timeLeft}s</div>
            

            

        </div>
      );
      


    }

export default Step3;

