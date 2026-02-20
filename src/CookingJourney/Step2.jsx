import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Step2.css"

function Step2() {
    const [choicedDish, setChoicedDish] = useState(null);
    const navigate = useNavigate();
     const Names= [
                     "Chicken Danbauk",
                    "Mo-hin-ga",
                    "Nan Gyi Toke",
                    "Coconut Milk Noodles",
                    "Sushi",
                    "Momo",
                    "Kimchi",
                    "Fried Chicken" ];
    
    const handeleNext = () =>{
        if (!choicedDish) return;
        navigate("/step3",{
            state: {
                choicedDish: choicedDish,
            },
        });
    };    
    
    return (
        <div className="step2">
            <h2>Which dish do you want to cook?</h2>
            <ul className="dishName">
                {Names.map( (dish) => (
                    <li
                        key={dish}
                        className={dish === choicedDish ? "dish active" : "dish"}
                        onClick={() => setChoicedDish(dish)}> {dish}
                        
                    </li>
                ))}
            </ul>
            <button onClick={handeleNext} disabled={!choicedDish}> Let's Try</button>
        </div>
    );
}

export default Step2;