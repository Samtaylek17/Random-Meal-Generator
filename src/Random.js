import React, {Component} from 'react';
import axios from 'axios';

// const API = 'https://www.themealdb.com/api/json/v1/1/random.php';

class Random extends Component {
    constructor(props){
        super(props);

        this.state = {
            meals: [],
        };
    }

    // getMeal(){
    //     fetch(API)
    //     .then(results => {
    //         return results.json();
    //     }).then(data => {
    //         let strMeal = data.meals.map((pic) => {
    //             return(
    //                 <div key={pic.idMeal}>
    //                     <img src={pic.strMealThumb} />
    //                     <h5>{pic.strMeal}</h5>
    //                     <h5>{pic.strArea}</h5>
    //                     <h5>{pic.strTags}</h5>
    //                     <h5>{pic.strMeal}</h5>
    //                     <p>{pic.strInstructions}</p>
    //                 </div>
    //             )
    //         })
    //         this.setState({strMeal: strMeal});
    //         console.log("state", this.state.strMeal);
    //     })
    // }

    getMeal(){
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            console.log(response)
            this.setState({meals: response.data.meals}) 
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
        const { meals } = this.state
        return(
            <div>
                <div className="hungry">
                    <h2>Are You Hungry?</h2>
                    <p>Do you need food? Then click the button below</p>
                    <button className="get-meal" onClick={this.getMeal.bind(this)}>Get Meal</button>
                </div>
                
                <div>
                    {meals.map(meal => 
                            <div key={meal.idMeal}>
                                <h2 className="hungry">{meal.strMeal}</h2>
                                <div className="guide">
                                    <div className="img"><img src={meal.strMealThumb} className="img-thumb"/></div>
                                    <div className="instructions">
                                        <h4>Instructions for preparation</h4>
                                        <p>{meal.strInstructions}</p>
                                    </div>
                                </div>
                                <div className="guide">
                                    <div className="ingredient">
                                        <h4>Ingredients</h4>
                                        <ul>
                                            <li>{meal.strIngredient1}</li>
                                            <li>{meal.strIngredient2}</li>
                                            <li>{meal.strIngredient3}</li>
                                            <li>{meal.strIngredient4}</li>
                                            <li>{meal.strIngredient5}</li>
                                            <li>{meal.strIngredient6}</li>
                                            <li>{meal.strIngredient7}</li>
                                        </ul>
                                    </div>
                                    <div className="video-resource">
                                        <h3>Video Recipe</h3>
                                        <iframe width="420" height="315" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>
                                            
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Random;